import createError from 'http-errors';
import _ from 'lodash';
import User from './user.model';

export function getById ({params: {id}}) {
    return User.findById(id);
}


export function update ({params: {id}, body: {user}}) {
    if (!(user._id === id) && !user.admin) {
        return Promise.reject(createError(403));
    }

    return User.findByIdAndUpdate(id, {$set: user})
        .then(_.noop);
}

async function getNameById (id) {
    const user = await User.findById(id);

    return user.name;
}

module.exports = {
    getNameById
}