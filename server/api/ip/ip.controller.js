import Ip from './ip.model';
import createError from 'http-errors';
import _ from 'lodash';

async function getAll () {
    try {
        const ips = await Ip.find();

        return ips;
    }
    catch (error) {
        createError(error);
    }
}

async function getById ({params: {id}}) {
    try {
        const ip = await Ip.findById(id);

        return ip;
    }
 catch (error) {
        createError(error);
    }
}

async function update ({params: {id}, body}) {
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

        return updated;
    }
    catch (error) {
        createError(error);
    }
}

async function destroy ({params: {id}}) {
    const removed = await Ip.findByIdAndRemove(id);

    return removed;
}

module.exports = {
    destroy,
    getAll,
    getById,
    update
};