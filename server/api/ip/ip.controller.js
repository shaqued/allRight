import {Categories} from '../../constant/ipCategory.const';
import {Tags} from '../../constant/ipTag.const';
import {Types} from '../../constant/ipType.const';
import Ip from './ip.model';
import createError from 'http-errors';
import _ from 'lodash';
import {body, validationResult} from 'express-validator/check';


async function getAll () {
    try {
        const ips = await Ip.find();

        return ips;
    }
    catch (error) {
        createError(error);
    }
}

async function getById ({params: {id}}, res) {

    const ip = await Ip.findById(id);

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
    const {body} = req;
    const ip = {
        name: body.name,
        category: body.category,
        tag: body.tag,
        owners: body.owners,
        dateOfCreation: body.dateOfCreation,
        price: body.price,
        reviews: body.reviews,
        about: body.about,
        sample: body.sample
    };

    const newIp = await Ip.create(ip);

    res.sendStatus(201).send({id: newIp._id});
}

async function update ({params: {id}, body}, res) {
    try {
        const data = _.pick(body, [
            'name',
            'category',
            'tag',
            'owners',
            'dateOfCreation',
            'price',
            'reviews',
            'about',
            'sample'
        ]);

        const updated = await Ip.findByIdAndUpdate(id, {$set: data});

        if (!updated) {
            res.status(404);
        }
        else {
            res.status(200);
        }
    }
    catch (error) {
        createError(error);
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

function validate (method) {
    switch (method) {
        case 'create': {
            return [
                body('name').exists(),
                body('category').optional().custom(item => {
                    return Object.values(Categories).includes(item);
                }),
                body('tag').optional().custom(tags => {
                    for (const tag of tags)
                    {
                        if (!Object.values(Tags).includes(tag))
                            return false;
                    }

                    return true;
                }),
                body('owners').exists().custom(owners => {
                let sum = 0;

                for (const e of owners) {
                    sum += e.percentageOfOwnership;
                }

                return sum === 100;
                }),
                body('price').exists(),
                body('about').exists(),
                body('type').optional().custom(item => {
                    return Object.values(Types).includes(item);
                })
            ];
        }
    }
}

module.exports = {
    destroy,
    getAll,
    getById,
    update,
    create,
    validate
};