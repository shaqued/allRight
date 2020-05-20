import seed from './purchase.seed';
import {createSeedModel} from 'mongoose-plugin-seed';
import {Schema} from 'mongoose';

const purchaseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        ref: 'user',
        required: true
    },
    cartItems: [{
        ipId: {
            type: Schema.Types.ObjectId,
            ref: 'ip',
            required: true
        },
        range: {
            type: Number
        }
    }],
    purchaseDate: {
        type: Date,
        default: Date.now()
    }
});

export default createSeedModel('Purchase', purchaseSchema, seed);
