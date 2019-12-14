import api from './apiConfig';

export const tagService = {
	get: () => {
		return api.get('tags');
	},
};

export const articleService = {
	getArticles: () => {
		return api.get('articles?limit=10&offset=0');
	},
};
