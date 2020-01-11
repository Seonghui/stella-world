import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');
export const GET_ARTICLE = makeAsyncActions('GET_ARTICLE');

const getArticles = options => ({
	type: GET_ARTICLES.request,
	payload: options,
});

const getArticle = options => ({
	type: GET_ARTICLE.request,
	payload: options,
});

export const articlesActions = {
	getArticles,
	getArticle,
};

const initialState = {
	articles: {},
	article: {},
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
				articles: {},
			};
		case GET_ARTICLE.success:
			return {
				...state,
				article: action.payload.article,
			};
		case GET_ARTICLE.failure:
			return {
				...state,
				article: {},
			};
		default:
			return state;
	}
}
