import api from './apiConfig';

export const tagsService = {
	getTags: () => {
		return api.get('tags');
	},
};

export const articlesService = {
	getArticles: () => {
		return api.get('articles?limit=10&offset=0');
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
