import knex from '../../db/index.js'

class feedServices {
	static async getFeed() {
		const data = await knex('feed').select('*');
		return data;
	}

	static async getFeedPost(id) {
		if (!id) return null;
		const data = await knex('feed').select('*')
		.where({
			id: parseInt(id, 10),
		});
		return data;
	}

	static async createFeedPost(post) {
		await knex('feed').insert({
			...post,
		});
	}
};

export default feedServices;
