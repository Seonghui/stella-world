import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');

const getArticles = options => ({
	type: GET_ARTICLES.request,
	payload: options,
});

export const articlesActions = {
	getArticles,
};

const initialState = {
	articles: {},
	offset: 10,
};

export default function articles(state = initialState, action = {}) {
	switch (action.type) {
		case GET_ARTICLES.success:
			return {
				...state,
				articles: action.payload,
			};
		case GET_ARTICLES.failure:
			return {
				...state,
				articles: [],
			};
		default:
			return state;
	}
}
