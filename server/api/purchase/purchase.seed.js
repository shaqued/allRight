import mongoose from 'mongoose';

const id = mongoose.Types.ObjectId();
const idSec = mongoose.Types.ObjectId();

export default {
    seed: () => [
        {
            user: id,
            cartItems: [
                {ipId: id, range: 100}
            ]
        },
        {
            user: idSec,
            cartItems: [
                {ipId: id, range: 100},
                {ipId: id, range: 200}
            ]
        }
    ]
};