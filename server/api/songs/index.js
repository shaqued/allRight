import {AsyncRouter} from 'express-async-router';

import {get} from './songs.controller'

const router = AsyncRouter();

router.get('/', get);

export default router;