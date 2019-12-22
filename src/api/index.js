import api from './apiConfig';

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
	login: user => {
		return api.post('users/login', user);
	},
	getCurrentUser: () => {
		return api.get('user');
	},
};
