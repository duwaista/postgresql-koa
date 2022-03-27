import Router from 'koa-router';
import feedServices from '../services/api/feed.js'

const router = new Router();

router.get('/api/feed', async (ctx) => {
	const feed = await feedServices.getFeed();
	ctx.body = feed;
});

router.post('/api/feed', async (ctx) => {
	const post = ctx.request.body;
	const response = await feedServices.createFeedPost(post);
	ctx.body = response;
});

router.get('/api/feed/:id', async (ctx) => {
	const id = ctx.params.id;
	const post = await feedServices.getFeedPost(id);
	ctx.body = post;
});

export default router;