import { AsyncRouter } from 'express-async-router';
import validate from 'express-validation-middleware';
import { create } from '../../api/user/user.scheme';
import { login, register, authAdmin } from './controller';
import './passport';

const router = new AsyncRouter();

router.post('/login', login);
router.post('/register', register);
router.post('/admin', authAdmin);

export default router;