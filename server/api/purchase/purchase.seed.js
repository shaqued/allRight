import mongoose from 'mongoose';
import {MediaType} from "../../constant/priceMediaType.const";
import {UsageType} from "../../constant/priceUsageType.const";
import User from '../user/user.model';

const id = mongoose.Types.ObjectId();
const idSec = mongoose.Types.ObjectId();

export default {
    dependencies: [User],
    seed: (users) => [
        {
            user: users[0],
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
            user: users[1],
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