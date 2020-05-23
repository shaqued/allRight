import {getAll, getById, changePassword, me, update, create, signIn} from './user.controller';
import objectId from 'express-param-objectid';
import {AsyncRouter} from 'express-async-router';

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', getAll);
router.get('/me', me);
router.put('/:id/password', changePassword);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/', create);

export default router;