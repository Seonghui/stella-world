import api from './apiConfig';

export const tagService = {
	get: () => {
		return api.get('tags');
	},
};
