import createError from 'http-errors';
import _ from 'lodash';
import User from './user.model';

export const getById = async ({params: {id}}) => User.findById(id)

export const getNameById = async ({params: {id}}) => User.findById(id).select('name');

export const getAll = async () => User.find();

export const update = async (req) => 
{
    console.log(req.body);
    const updatedUser  = req.body.user;
    
    if(req.user._id !== updatedUser._id) {
        throw createError(403)
    }

    return User.findByIdAndUpdate(updatedUser._id, {$set: updatedUser})
}