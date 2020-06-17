import {MediaType} from '../../constant/priceMediaType.const';
import {UsageType} from '../../constant/priceUsageType.const';


export default {
    seed: () => [
        {
            businessRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 50,
                    mediaType: MediaType.offline,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 50,
                    rangeMax: 100,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 200
                }
            ],
            privateRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 50,
                    mediaType: MediaType.offline,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 50,
                    rangeMax: 100,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 200
                }
            ],
            socialRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 50,
                    mediaType: MediaType.online,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 50,
                    rangeMax: 100,
                    mediaType: MediaType.online,
                    usageType: UsageType.single,
                    price: 200
                }
            ]
        }
]
};