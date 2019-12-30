import { api } from './apiConfig';

export const tagsService = {
	getTags: () => {
		return api.get('tags');
	},
};

export const articlesService = {
	getAll: ({ limit = 10, offset = 0 }) => {
		return api.get(`articles?limit=${limit}&offset=${offset}`);
	},
	getByAuthor: ({ username, limit = 10, offset = 0 }) => {
		return api.get(
			`articles?author=${username}&limit=${limit}&offset=${offset}`,
		);
	},
	getByFavorites: ({ username, limit = 10, offset = 0 }) => {
		return api.get(
			`articles?favorited=${username}&limit=${limit}&offset=${offset}`,
		);
	},
	getByTag: ({ tag, limit = 10, offset = 0 }) => {
		return api.get(`articles?tag=${tag}&limit=${limit}&offset=${offset}`);
	},
};

export const authService = {
	login: payload => {
		return api.post('users/login', { user: payload });
	},
	getCurrentUser: () => {
		return api.get('user');
	},
	register: payload => {
		return api.post('users', { user: payload });
	},
	updateUser: payload => {
		return api.put('user', { user: payload });
	},
};

export const userService = {
	getProfile: ({ options }) => {
		return api.get(`profiles/${options.username}`);
	},
	followUser: ({ options }) => {
		return api.post(`profiles/${options.username}/follow`);
	},
	unfollowUser: ({ options }) => {
		return api.delete(`profiles/${options.username}/follow`);
	},
};
