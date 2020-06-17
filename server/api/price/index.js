import {getById, getAll, create} from './price.controller';
import {AsyncRouter} from 'express-async-router';
import objectId from 'express-param-objectid';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

export default router;

