import {Tags} from '../../constant/ipTag.const';
import {Categories} from '../../constant/ipCategory.const';
import {Types} from '../../constant/ipType.const';
import seed from './ip.seed';
import {createSeedModel} from 'mongoose-plugin-seed';
import {Schema} from 'mongoose';

const ipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: Object.values(Categories)
    },
    tag: [{
        type: String,
        enum: Object.values(Tags)
    }],
    composer: {
        type: String,
        required: true
    },
    performer: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    owners: [
        {
            user: {
                type: Schema.Types.ObjectID,
                ref: 'user',
                required: true
            },
            percentageOfOwnership: {
                type: Number,
                required: true
            }
        }
    ],
    dateOfCreation:
        {
            type: Date
        },
    price:
        {
            type: Schema.Types.ObjectID,
            ref: 'price',
            required: true
        },
    reviews:
    [
        {
            user: {
                type: Schema.Types.ObjectID,
                ref: 'user',
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            scoring: {
                type: Number,
                required: true
            },
            creationDate: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    about:
        {
            type: String
        },
    type:
        {
            type: String,
            enum: Object.values(Types)
        },
    sample:
        {
            type: String
        }
});

export default createSeedModel('Ip', ipSchema, seed);