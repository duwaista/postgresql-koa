import Router from 'koa-router';
import postsServices from '../services/api/posts.js';

const router = new Router();

router.get('/:id/posts', async (ctx) => {
	const id = ctx.params.id;
	const post = await postsServices.getUserPosts(id);
	ctx.body = post;
});

export default router;