import {AsyncRouter} from 'express-async-router';
import {getAll, update, getNameById, getById} from './user.controller';
import objectId from 'express-param-objectid';
import {isAuthenticated} from '../../auth/auth.service'

const router = new AsyncRouter();

router.param('id', objectId);

router.get('/', isAuthenticated(), getAll)
router.get('/:id', isAuthenticated(), getById)
router.get('/:id/name', isAuthenticated(), getNameById)
router.put('/', isAuthenticated(), update)

export default router;