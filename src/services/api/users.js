import knex from "../../db/index.js";

class usersServices {
	static async getUserPosts(uid) {
		return await knex('feed')
			.select('*')
			.where({
				uid
			})
			.orderBy("createdAt", "desc")
	}
}

export default usersServices;