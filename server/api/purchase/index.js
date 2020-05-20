// eslint-disable-next-line import/named
import { destroy, update, getBy} from './purchase.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getBy);
router.get('/:id', getBy);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
