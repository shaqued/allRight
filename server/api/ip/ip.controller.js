import {Categories} from '../../constant/ipCategory.const';
import {Tags} from '../../constant/ipTag.const';
import {Types} from '../../constant/ipType.const';
import Ip from './ip.model';
import createError from 'http-errors';
import {body, validationResult} from 'express-validator/check';

const fs = require('fs-extra');

const SUGGESTED_SONGS_COUNT = 7;


async function popularIps () {
    const ips = await Ip.aggregate([{$sort: {purchasesCounter: -1}},
        {$limit: 10}]);

    return ips;
}

async function search (query) {
    const ips = await Ip.aggregate([query]);

    return ips;
}

async function getAll (req, res) {
    try {
        if (req.query.popular === 'true') {
            return await popularIps();
        }
        else if (req.query.category || req.query.type || req.query.name || req.query.performer) {
            const orClause = [];

            if (req.query.category) {
                orClause.push({category: req.query.category});
            }

            if (req.query.type) {
                orClause.push({type: req.query.type});
            }

            if (req.query.name) {
                orClause.push({name: {$regex: req.query.name, $options: 'i'}});
            }

            if (req.query.performer) {
                orClause.push({performer: {$regex: req.query.performer, $options: 'i'}});
            }

            return await search({$match: {$or: orClause}});
        }

        const ips = await Ip.find();

        return ips;
    }
    catch (error) {
        createError(error);
    }
}

async function getById (req, res) {
    const ip = await Ip.findById(req.params.id);

    if (!ip) {
        res.status(404);
    }

    return ip;
}

async function create (req, res) {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});

    return;
    }

    const ip = req.body;

    if (req.file) {
        const img = fs.readFileSync(req.file.path);

        ip.image = {
            contentType: 'image/jpeg',
            data: img
        };
    }

    const newIp = await Ip.create(ip);

    res.sendStatus(201).send({id: newIp._id});
}

async function update (req, res) {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});

    return;
    }
    const ip = req.body;

    if (req.file) {
        const img = fs.readFileSync(req.file.path);

        ip.image = {
            contentType: 'image/jpeg',
            data: img
        };
    }

    const updated = await Ip.findByIdAndUpdate(req.params.id, ip, {new: true});

    if (!updated) {
        res.status(404);
    }
    else {
        res.status(200);
    }
}

async function destroy ({params: {id}}, res) {
    const removed = await Ip.findByIdAndRemove(id);

    if (!removed) {
        res.status(404);
    }
    else {
        res.status(200);
    }
}

function tagsValidation (tags) {
    for (const tag of tags) {
        if (!Object.values(Tags).includes(tag)) {
                return false;
        }
    }

    return true;
}

function ownersValidation (owners) {
    let sum = 0;

    for (const e of owners) {
        sum += e.percentageOfOwnership;
    }

    return sum === 100;
}

function validate (method) {
    switch (method) {
        case 'create': {
            return [
                body('name').exists(),
                body('category').optional()
                                .custom(item => {
                    return Object.values(Categories).includes(item);
                }),
                body('tag').optional()
                           .custom(tags => {
                   return tagsValidation(tags);
                }),
                body('performer').exists(),
                body('composer').exists(),
                body('writer').exists(),
                body('owners').exists()
                              .custom(owners => {
                    return ownersValidation(owners);
                }),
                body('price').exists(),
                body('about').optional(),
                body('type').optional()
                            .custom(item => {
                    return Object.values(Types).includes(item);
                })
            ];
        }
        case 'update':
        {
            return [
                body('name').optional()
.notEmpty(),
                body('category').optional()
.custom(item => {
                    return Object.values(Categories).includes(item);
                }),
                body('tag').optional()
.custom(tags => {
                    return tagsValidation(tags);
                }),
                body('owners').optional()
.custom(owners => {
                    return ownersValidation(owners);
                }),
                body('price').optional(),
                body('about').optional(),
                body('type').optional()
.custom(item => {
                    return Object.values(Types).includes(item);
                })
            ];
        }
    }
}

async function suggestedIps (req, res) {
    const ip = await getById(req, res);

    const ips = await Ip.find({
        _id: {$ne: ip._id},
        $or: [
            {performer: ip.performer},
            {category: ip.category},
            {tag: {$in: ip.tag}}
        ]});

    let count = SUGGESTED_SONGS_COUNT;
    const result = new Array(SUGGESTED_SONGS_COUNT);

    let {length} = ips;

    if (count > length) {
        return ips;
    }

    const taken = new Array(length);

    while (count--) {
        const x = Math.floor(Math.random() * length);

        result[count] = ips[x in taken ? taken[x] : x];
        taken[x] = --length in taken ? taken[length] : length;
    }

    return result;
}

async function addPurchase (id) {
    const ip = await Ip.findById(id);

    console.log(ip);
    const updated = await Ip.findByIdAndUpdate(id, {purchasesCounter: ip.purchasesCounter + 1},
                                      {new: true});
}


async function ipIdMiddleware (id) {
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
    popularIps
};