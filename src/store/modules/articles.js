import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');
export const GET_ARTICLE = makeAsyncActions('GET_ARTICLE');
export const FAVORITE_ARTICLE = makeAsyncActions('FAVORITE_ARTICLE');
export const UNFAVORITE_ARTICLE = makeAsyncActions('UNFAVORITE_ARTICLE');
export const CREATE_ARTICLE = makeAsyncActions('CREATE_ARTICLE');
export const UPDATE_ARTICLE = makeAsyncActions('UPDATE_ARTICLE');
export const RESET_ERROR = 'RESET_ERROR';

const getArticles = payload => ({
	type: GET_ARTICLES.request,
	payload,
});

const getArticle = payload => ({
	type: GET_ARTICLE.request,
	payload,
});

const favoriteArticle = payload => ({
	type: FAVORITE_ARTICLE.request,
	payload,
});

const unfavoriteArticle = payload => ({
	type: UNFAVORITE_ARTICLE.request,
	payload,
});

const createArticle = (payload, onSuccess) => ({
	type: CREATE_ARTICLE.request,
	payload,
	onSuccess,
});

const updateArticle = (payload, onSuccess) => ({
	type: UPDATE_ARTICLE.request,
	payload,
	onSuccess,
});

const resetError = () => ({
	type: RESET_ERROR,
});

export const articlesActions = {
	getArticles,
	getArticle,
	favoriteArticle,
	unfavoriteArticle,
	createArticle,
	resetError,
	updateArticle,
};

const initialState = {
	articles: {},
	article: {},
	offset: 10,
	errors: {},
	isError: false,
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
		case CREATE_ARTICLE.success:
		case UPDATE_ARTICLE.success:
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
		case CREATE_ARTICLE.failure:
		case UPDATE_ARTICLE.failure:
			return {
				...state,
				article: {},
				errors: action.payload,
				isError: true,
			};

		case RESET_ERROR:
			return {
				...state,
				errors: {},
				isError: false,
			};
		default:
			return state;
	}
}
