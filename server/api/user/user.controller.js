import createError from 'http-errors';
import _ from 'lodash';
import User from './user.model';

export const getById = async ({params: {id}}) => User.findById(id)

export const getNameById = async ({params: {id}}) => User.findById(id).select('name');

export const getAll = async () => User.find();

export const update = async (req) => 
{
    const updatedUser  = req.body.user;
    console.log(updatedUser);
    if (updatedUser.cart[0])    
        console.log(updatedUser.cart[0].range);
    if(req.user._id !== updatedUser._id) {
        throw createError(403)
    }

    return User.findByIdAndUpdate(updatedUser._id, {$set: updatedUser})
}