// eslint-disable-next-line import/default,import/named
import {addPurchase} from '../ip/ip.controller';
import Ip from '../ip/ip.model';
import Purchase from './purchase.model';
import createError from 'http-errors';
import {pick, reduce, sum, map} from 'lodash';

async function getBy (req) {
    try {
        let purchases;

        if (req.query.user) {
            purchases = await Purchase.find({user: req.query.user});
        }
        else if (req.query.id) {
            purchases = await Purchase.findById(req.query.id);
        }
       else {
            purchases = await Purchase.find();
        }

        return purchases;
    }
    catch (error) {
        createError(error);
    }
}

async function create (req, res) {
    const {body} = req;

    const purchase = {
        cartItems: body.cartItems,
        purchaseDate: Date.now(),
        user: body.user
    };

    await Promise.all(purchase.cartItems.map(({ipId}) => addPurchase(ipId)));

    const newPurchase = await Purchase.create(purchase);

    res.sendStatus(201).send({id: newPurchase._id});
}

async function update ({params: {id}, body}) {
    try {
        const data = pick(body, [
            'user',
            'cartItems',
            'purchaseDate'
        ]);

        await Promise.all(data.cartItems.map(({ipId}) => addPurchase(ipId)));

        const updated = await Purchase.findByIdAndUpdate(id, {$set: data});

        return updated;
    }
    catch (error) {
        createError(error);
    }
}

async function destroy ({params: {id}}) {
    const removed = await Purchase.findByIdAndRemove(id);

    return removed;
}

async function getProfitsByIp (req, res) {
    const purchases = await Purchase.find({cartItems: {$elemMatch: {ipId: req.params.id}}});

    const profits = reduce(purchases,
        (result, purchase) => {
        const items = purchase.cartItems.filter(x => x.ipId.toString() === req.params.id);

        // reduce in case one purchase include same ip multiple times
        return result + reduce(items, (sum, value) => sum + value.range.price, 0);
        }, 0);

    res.send({profits});
}

module.exports = {
    destroy,
    update,
    getBy,
    create,
    getProfitsByIp
};