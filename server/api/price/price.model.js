import seed from './price.seed';
import {createSeedModel} from 'mongoose-plugin-seed';
import {Schema} from 'mongoose';
import {MediaType} from '../../constant/priceMediaType.const';
import {UsageType} from '../../constant/priceUsageType.const';

const rangePriceSchema = new Schema({
    rangeMin: {
        type: Number
    },
    rangeMax: {
        type: Number
    },
    mediaType: {
        type: String,
        enum: Object.values(MediaType)
    },
    usageType: {
        type: String,
        enum: Object.values(UsageType)
    },
    price: {
        type: Number,
        required: true
    }
});

const priceSchema = new Schema({
    businessRangePrice: {
        type: Schema.Types.ObjectID,
        ref: 'user',
        required: true
    }
});
