import songs from './songs';
import user from './user';
import {AsyncRouter} from 'express-async-router';

const router = AsyncRouter();

router.use('/song', songs);
router.use('/users', user);

export default router;