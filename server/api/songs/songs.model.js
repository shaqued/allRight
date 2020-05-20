// Here wer'e gonna put mongoose model for songs
import {Schema} from 'mongoose';

const ipOwnerSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    precentageOfOwnership: {
        type: Number,
        required: true
    }
});