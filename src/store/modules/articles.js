import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');
export const GET_ARTICLE = makeAsyncActions('GET_ARTICLE');
export const FAVORITE_ARTICLE = makeAsyncActions('FAVORITE_ARTICLE');
export const UNFAVORITE_ARTICLE = makeAsyncActions('UNFAVORITE_ARTICLE');

const getArticles = options => ({
	type: GET_ARTICLES.request,
	payload: options,
});

const getArticle = options => ({
	type: GET_ARTICLE.request,
	payload: options,
});

const favoriteArticle = options => ({
	type: FAVORITE_ARTICLE.request,
	payload: options,
});

const unfavoriteArticle = options => ({
	type: UNFAVORITE_ARTICLE.request,
	payload: options,
});

export const articlesActions = {
	getArticles,
	getArticle,
	favoriteArticle,
	unfavoriteArticle,
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
		case FAVORITE_ARTICLE.success:
		case UNFAVORITE_ARTICLE.success:
			return {
				...state,
				article: action.payload.article,
			};
		case GET_ARTICLE.failure:
		case FAVORITE_ARTICLE.failure:
		case UNFAVORITE_ARTICLE.failure:
			return {
				...state,
				article: {},
			};
		default:
			return state;
	}
}
