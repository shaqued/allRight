import songs from './songs';
import user from './user';
import {AsyncRouter} from 'express-async-router';
import purchase from './purchase';
import ip from './ip';

const router = AsyncRouter();

router.use('/users', user);
router.use('/ip', ip);
router.use('/purchase', purchase);

export default router;