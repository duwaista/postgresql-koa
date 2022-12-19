import Router from 'koa-router';
import usersServices from "../services/api/users.js";

const router = new Router();

router.get('/:id/posts', async (ctx) => {
	const id = ctx.params.id;
	const post = await usersServices.getUserPosts(id);
	ctx.body = post;
});

export default router;