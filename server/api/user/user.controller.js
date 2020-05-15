import User from './user.model';
import createError from 'http-errors';
import _ from 'lodash';

export function getAll () {
    return User.find({});
}

export function getById ({params: {id}})  {
    return User.findById(id);}

export function update  ({user, params: {id}, body}) {
    if (!user._id.equals(id) && !user.admin) {
        return Promise.reject(createError(403));
    }

    const {name, email} = body;
    const data = {name, email};

    return User.findByIdAndUpdate(id, {$set: data})
        .then(_.noop);
}