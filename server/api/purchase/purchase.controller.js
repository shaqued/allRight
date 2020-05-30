// eslint-disable-next-line import/default
import Purchase from './purchase.model';
import createError from 'http-errors';
import {pick} from 'lodash';

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

module.exports = {
    destroy,
    update,
    getBy,
    create
};