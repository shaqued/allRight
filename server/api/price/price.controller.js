import {MediaType} from '../../constant/priceMediaType.const';
import {UsageType} from '../../constant/priceUsageType.const';
import Price from './price.model';
import {pick} from 'lodash';

async function getAll () {
    const prices = await Price.find();

    return prices;
}

async function getById (req, res) {
    const price = await Price.findById(req.params.id);

    if (!price) {
        res.status(404);
    }

    return price;
}

module.exports = {
    getAll,
    getById
   };