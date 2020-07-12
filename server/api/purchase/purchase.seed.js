import mongoose from 'mongoose';
import {MediaType} from "../../constant/priceMediaType.const";
import {UsageType} from "../../constant/priceUsageType.const";
import User from '../user/user.model';
import Ip from '../ip/ip.model';

const id = mongoose.Types.ObjectId();
const idSec = mongoose.Types.ObjectId();

export default {
    dependencies: [User, Ip],
    seed: (users, ips) => [
        {
            user: users[0],
            cartItems: [
                {ipId: ips[0], 
                    range: {
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
                {ipId: ips[1], 
                    range:  {
                        rangeMin: 1,
                        rangeMax: 40,
                        mediaType: MediaType.online,
                        usageType: UsageType.onlyMe,
                        price: 100
                    }},
                {ipId: ips[2], 
                    range:  {
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