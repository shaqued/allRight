// eslint-disable-next-line import/named
import {ipIdMiddleware} from '../ip/ip.controller';
import {destroy, update, getBy, create} from './purchase.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';

const router = new AsyncRouter();

async function ipValidation (req, res) {
    const items = req.body.cartItems;

    for (const item of items) {
        const isValid = await ipIdMiddleware(item.ipId);

        if (!isValid) {
            res.status(400).send('undefined');
        }
    }
}

router.param('id', objectId);

router.get('/', getBy);
router.get('/:id', getBy);
router.put('/', ipValidation, create);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;


