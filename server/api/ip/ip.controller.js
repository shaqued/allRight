import {Categories} from '../../constant/ipCategory.const';
import {Tags} from '../../constant/ipTag.const';
import {Types} from '../../constant/ipType.const';
import Ip from './ip.model';
import createError from 'http-errors';
import {pick} from 'lodash';
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
        composer: body.composer,
        performer: body.performer,
        writer: body.writer,
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

async function update (req, res) {

    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});
        return;
    }

    const data = pick(req.body, [
        'name',
        'category',
        'tag',
        'composer',
        'performer',
        'writer',
        'owners',
        'dateOfCreation',
        'price',
        'reviews',
        'about',
        'sample'
    ]);

    const updated = await Ip.findByIdAndUpdate(req.params.id, {$set: data});

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
        if (!Object.values(Tags).includes(tag))
            return false;
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
                body('category').optional().custom(item => {
                    return Object.values(Categories).includes(item);
                }),
                body('tag').optional().custom(tags => {
                   return tagsValidation(tags);
                }),
                body('performer').exists(),
                body('composer').exists(),
                body('writer').exists(),
                body('owners').exists().custom(owners => {
                    return ownersValidation(owners);
                }),
                body('price').exists(),
                body('about').optional(),
                body('type').optional().custom(item => {
                    return Object.values(Types).includes(item);
                })
            ];
        }
        case 'update':
        {
            return [
                body('name').optional().notEmpty(),
                body('category').optional().custom(item => {
                    return Object.values(Categories).includes(item);
                }),
                body('tag').optional().custom(tags => {
                    return tagsValidation(tags);
                }),
                body('owners').optional().custom(owners => {
                    return ownersValidation(owners);
                }),
                body('price').optional(),
                body('about').optional(),
                body('type').optional().custom(item => {
                    return Object.values(Types).includes(item);
                })
            ];
        }
    }
}

async function getSuggestionIps (req, res){
    const ip = await getById(req.params.id, res);

    const query = {
        _id: {$not: ip._id},
        $or: [
            {performer: ip.performer},
            {category: ip.category},
            {tag: {$in: ip.tag}}
        ]};

    const ips = await Ip.find(query);

    return ips;
}

module.exports = {
    destroy,
    getAll,
    getById,
    update,
    create,
    validate,
    getSuggestionIps
};