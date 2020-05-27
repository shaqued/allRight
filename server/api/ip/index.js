// eslint-disable-next-line import/named
import {getById, getAll, update, destroy, create, validate, getSuggestionIps} from './ip.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validate('create'), create);
router.get('/suggestion/:id', getSuggestionIps());
router.put('/:id', validate('update'), update);
router.delete('/:id', destroy);

export default router;
