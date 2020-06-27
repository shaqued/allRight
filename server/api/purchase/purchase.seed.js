import mongoose from 'mongoose';
import {MediaType} from "../../constant/priceMediaType.const";
import {UsageType} from "../../constant/priceUsageType.const";

const id = mongoose.Types.ObjectId();
const idSec = mongoose.Types.ObjectId();

export default {
    seed: () => [
        {
            user: id,
            cartItems: [
                {ipId: id, range: {
                        rangeMin: 1,
                        rangeMax: 40,
                        mediaType: MediaType.online,
                        usageType: UsageType.onlyMe,
                        price: 100
                    }}
            ]
        },
        {
            user: idSec,
            cartItems: [
                {ipId: id, range:  {
                        rangeMin: 1,
                        rangeMax: 40,
                        mediaType: MediaType.online,
                        usageType: UsageType.onlyMe,
                        price: 100
                    }},
                {ipId: id, range:  {
                        rangeMin: 1,
                        rangeMax: 40,
                        mediaType: MediaType.online,
                        usageType: UsageType.onlyMe,
                        price: 100
                    }}
            ]
        }
    ]
};