import Router from 'koa-router';
import postsServices from '../services/api/posts.js'

const router = new Router();

router.get('/', async (ctx) => {
	const feed = await postsServices.getPosts();
	ctx.body = feed;
});

router.post('/', async (ctx) => {
	const post = ctx.request.body;
	const response = await postsServices.createFeedPost(post);
	ctx.body = response;
});

router.get('/:id', async (ctx) => {
	const id = ctx.params.id;
	const post = await postsServices.getPost(id);
	ctx.body = post;
});

router.delete('/:id', async (ctx) => {
	const id = ctx.params.id;
	const post = await postsServices.deletePost(id);
	ctx.body = post;
});

router.patch('/:id', async (ctx) => {
	const id = ctx.params.id;
	const data = ctx.request.body;

	const updatedPost = await postsServices.updatePost({ id, data });
	ctx.body = updatedPost;
});

export default router;