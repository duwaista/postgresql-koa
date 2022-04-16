import Router from 'koa-router';

import feedRouter from './posts.js';
import usersRouter from './users.js';

const router = new Router();

router.use('/api/feed', feedRouter.routes())
router.use('/api/users', usersRouter.routes())

export default router;