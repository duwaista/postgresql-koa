import knex from '../../db/index.js'

class postsServices {
	static async getPosts() {
		return await knex('feed').select('*');
	}

	static async getPost(id) {
		return await knex('feed').select('*')
			.where({
				id: parseInt(id, 10),
			});
	}

	static async createFeedPost(post) {
		return await knex('feed')
		.returning('id')
		.insert({
			...post,
		});
	}

	static async deletePost(id) {
		if (!id) return null
		return await knex('feed')
		.where({ id: parseInt(id, 10) })
		.del()
	}

	static async getUserPosts(uid) {
		return await knex('feed')
			.select('*')
			.where({
				uid
			})
	}
};

export default postsServices;
