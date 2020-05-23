// eslint-disable-next-line import/named
import {getById, getAll, update, destroy, create, validate} from './ip.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/', validate('create'), create);

export default router;
