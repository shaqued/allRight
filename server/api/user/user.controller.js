import createError from 'http-errors';
import _ from 'lodash';
import User from './user.model';

export function getById ({params: {id}}) {
    return User.findById(id);
}

async function getNameById (id) {
    const user = await User.findById(id);

    return user.name;
}

// export function update ({user, params: {id}, body}) {
export function update ({params: {id}, body: {user}}) {
    if (!(user._id === id) && !user.admin) {
        return Promise.reject(createError(403));
    }

    // const {name, email} = body;
    // const data = {name, email};

    return User.findByIdAndUpdate(id, {$set: user})
        .then(_.noop);
}

module.exports = {
    getNameById
}