import songs from './songs';
import user from './user';
import {AsyncRouter} from 'express-async-router';
import purchase from './purchase';
import ip from './ip';
import {isAuthenticated} from '../auth/auth.service'

const router = AsyncRouter();

router.use('/users', user);
router.use('/ip', ip);
router.use('/purchase',isAuthenticated(), purchase);

export default router;