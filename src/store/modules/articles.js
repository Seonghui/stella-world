import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');

const getArticles = () => ({
	type: GET_ARTICLES.request,
});

export const articlesActions = {
	getArticles,
};

const initialState = {
	articles: [],
};

export default function articles(state = initialState, action = {}) {
	switch (action.type) {
		case GET_ARTICLES.success:
			return {
				...state,
				articles: action.payload.articles,
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
