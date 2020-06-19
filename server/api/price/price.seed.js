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
        },
        {
            businessRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 100,
                    mediaType: MediaType.offline,
                    usageType: UsageType.onlyMe,
                    price: 150
                },
                {
                    rangeMin: 100,
                    rangeMax: 300,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 300
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
                    rangeMax: 150,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 150
                }
            ],
            socialRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 70,
                    mediaType: MediaType.online,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 70,
                    rangeMax: 170,
                    mediaType: MediaType.online,
                    usageType: UsageType.single,
                    price: 200
                }
            ]
        },
        {
            businessRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 130,
                    mediaType: MediaType.offline,
                    usageType: UsageType.onlyMe,
                    price: 300
                },
                {
                    rangeMin: 130,
                    rangeMax: 300,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 400
                }
            ],
            privateRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 100,
                    mediaType: MediaType.offline,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 100,
                    rangeMax: 150,
                    mediaType: MediaType.offline,
                    usageType: UsageType.single,
                    price: 190
                }
            ],
            socialRangePrice: [
                {
                    rangeMin: 1,
                    rangeMax: 40,
                    mediaType: MediaType.online,
                    usageType: UsageType.onlyMe,
                    price: 100
                },
                {
                    rangeMin: 40,
                    rangeMax: 120,
                    mediaType: MediaType.online,
                    usageType: UsageType.single,
                    price: 200
                }
            ]
        }
]
};