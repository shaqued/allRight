import createError from "http-errors";
import { body, validationResult } from "express-validator";
import Deezer from "deezer-web-api";
import { Categories } from "../../constant/ipCategory.const";
import { Tags } from "../../constant/ipTag.const";
import { Types } from "../../constant/ipType.const";
import { getNameByIdForAddComment } from "../user/user.controller";
import Ip from "./ip.model";
import { common } from "@material-ui/core/colors";
import mongoose from "mongoose";

const fs = require("fs");

const SUGGESTED_SONGS_COUNT = 7;

const DeezerClient = new Deezer();

async function suggestedIps(req, res) {
    const ip = await getById(req, res);

    const ips = await Ip.find({
        _id: { $ne: ip._id },
        $or: [
            { performer: ip.performer },
            { category: ip.category },
            { tag: { $in: ip.tag } },
        ],
    }).lean();

    let count = SUGGESTED_SONGS_COUNT;
    const result = new Array(SUGGESTED_SONGS_COUNT);

    let { length } = ips;

    if (count > length) {
        return ips;
    }

    const taken = new Array(length);

    while (count--) {
        const x = Math.floor(Math.random() * length);

        result[count] = ips[x in taken ? taken[x] : x];
        taken[x] = --length in taken ? taken[length] : length;
    }

    result.forEach((x) => {
        let buff;

        let strImage;

        if (x.image) {
            buff = Buffer.from(x.image.data.buffer);
            strImage = buff.toString("base64");
            x.image.data = strImage;
        }
    });

    return result;
}

async function popularIps() {
    const ips = await Ip.aggregate([
        { $sort: { purchasesCounter: -1 } },
        { $limit: 10 },
    ]);

    return ips;
}

async function search(query) {
    const ips = await Ip.aggregate([query]);

    return ips;
}

async function getAll(req, res) {
    try {
        if (req.query.popular === "true") {
            return await popularIps();
        } else if (
            req.query.category ||
            req.query.type ||
            req.query.name ||
            req.query.performer
        ) {
            const orClause = [];
            const regularClause = [];

            if (req.query.category) {
                regularClause.push({ category: req.query.category });
            }

            if (req.query.type) {
                regularClause.push({ type: req.query.type });
            }

            if (req.query.tag) {
                regularClause.push({
                    tag: { $regex: `^${req.query.tag}`, $options: "i" },
                });
            }

            if (req.query.name) {
                orClause.push({ name: { $regex: req.query.name, $options: "i" } });
            }

            if (req.query.performer) {
                orClause.push({
                    performer: { $regex: req.query.performer, $options: "i" },
                });
            }

            if (orClause.length > 0) {
                regularClause.push({ $or: orClause });
            }

            return await search({ $match: { $and: regularClause } });
        }

        const ips = await Ip.find();

        return ips;
    } catch (error) {
        createError(error);
    }
}

async function getById(req, res) {
    const ip = await Ip.findById(req.params.id).lean();

    if (!ip) {
        return res.status(404);
    }
    let buff;

    let strImage;

    if (ip.image) {
        buff = Buffer.from(ip.image.data.buffer);
        strImage = buff.toString("base64");
        ip.image.data = strImage;
    }

    return ip;
}

async function getOwnerIps(req, res) {
    const ips = await Ip.find({
        owners: { $elemMatch: { user: req.params.id } },
    });

    return ips;
}

async function getSample(ip) {
    try {
        const res = await DeezerClient.infos.search("track", encodeURI(ip.name));
        const track = res.data.find((x) => x.artist.name === ip.performer);

        return track !== undefined ? track.preview : res.data[0].preview;
    } catch (error) {
        console.log(error);
    }
}

async function create(req, res) {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });

        return;
    }

    const ip = req.body;

    if (!ip.sample) {
        ip.sample = await getSample(ip.name);
    }

    if (req.file) {
        const img = fs.readFileSync(req.file.path);

        ip.image = {
            contentType: "image/jpeg",
            data: img,
        };
    }

    if (ip.tag) {
        ip.tag = JSON.parse(ip.tag);
    }

    ip.price = JSON.parse(ip.price);
    ip.owners = JSON.parse(ip.owners);
    ip.reviews = [];

    if (!ip._id) {
        ip._id = mongoose.Types.ObjectId();
    }

    const newIp = await Ip.findOneAndUpdate({ _id: ip._id }, ip, {
        upsert: true,
    });
    res.send(201);
}

async function update(req, res) {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });

        return;
    }
    const ip = req.body;

    if (req.file) {
        const img = fs.readFileSync(req.file.path);

        ip.image = {
            contentType: "image/jpeg",
            data: img,
        };
    }

    const updated = await Ip.findByIdAndUpdate(req.params.id, ip, { new: true });

    if (!updated) {
        res.status(404);
    } else {
        res.status(200);
    }
}

async function destroy({ params: { id } }, res) {
    const removed = await Ip.findByIdAndRemove(id);

    if (!removed) {
        res.status(404);
    } else {
        res.status(200);
    }
}
async function addComment(req, res) {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });

        return;
    }

    // Getting user name
    const name = await getNameByIdForAddComment(req.body.user._id);

    const comment = { ...req.body, user: req.body.user._id };

    comment.userName = `${name.first} ${name.last}`;

    const updated = await Ip.findByIdAndUpdate(
        req.params.id,
        { $push: { reviews: comment } },
        { new: true }
    );

    if (!updated) {
        res.status(404);
    } else {
        res.status(200);
    }
}
function tagsValidation(tags) {
    for (const tag of JSON.parse(tags)) {
        if (!Object.values(Tags).includes(tag)) {
            return false;
        }
    }

    return true;
}

function ownersValidation(owners) {
    let sum = 0;

    for (const e of JSON.parse(owners)) {
        sum += e.percentageOfOwnership;
    }

    return sum === 100;
}

function validate(method) {
    switch (method) {
        case "create": {
            return [
                body("name").exists(),
                body("category")
                    .optional()
                    .custom((item) => {
                        return Object.values(Categories).includes(item);
                    }),
                body("tag")
                    .optional()
                    .custom((tags) => {
                        return tagsValidation(tags);
                    }),
                body("performer").exists(),
                body("composer").exists(),
                body("writer").exists(),
                body("owners")
                    .exists()
                    .custom((owners) => {
                        return ownersValidation(owners);
                    }),
                body("price").exists(),
                body("about").optional(),
                body("type")
                    .optional()
                    .custom((item) => {
                        return Object.values(Types).includes(item);
                    }),
            ];
        }
        case "update": {
            return [
                body("name").optional().notEmpty(),
                body("category")
                    .optional()
                    .custom((item) => {
                        return Object.values(Categories).includes(item);
                    }),
                body("tag")
                    .optional()
                    .custom((tags) => {
                        return tagsValidation(tags);
                    }),
                body("owners")
                    .optional()
                    .custom((owners) => {
                        return ownersValidation(owners);
                    }),
                body("price").optional(),
                body("about").optional(),
                body("type")
                    .optional()
                    .custom((item) => {
                        return Object.values(Types).includes(item);
                    }),
            ];
        }
        case "addComment": {
            return [
                body("user").exists(),
                body("comment").exists(),
                body("scoring").exists(),
            ];
        }
    }
}

async function addPurchase(id) {
    const ip = await Ip.findById(id);

    const updated = await Ip.findByIdAndUpdate(
        id,
        { purchasesCounter: ip.purchasesCounter + 1 },
        { new: true }
    );
}

async function ipIdMiddleware(id) {
    const ip = await Ip.findById(id);

    return ip;
}

module.exports = {
    destroy,
    getAll,
    getById,
    update,
    create,
    validate,
    suggestedIps,
    ipIdMiddleware,
    addPurchase,
    getOwnerIps,
    addComment,
};
