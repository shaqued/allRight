import {MediaType} from '../../constant/priceMediaType.const';
import {UsageType} from '../../constant/priceUsageType.const';
import Price from './price.model';
import {pick} from 'lodash';
import Ip from "../ip/ip.model";

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

async function create (req, res) {
    const price = req.body;

    const newPrice = await Price.create(price);

    res.sendStatus(201).send({id: price._id});
}


module.exports = {
    getAll,
    getById,
    create
   };