import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_ARTICLES = makeAsyncActions('GET_ARTICLES');

const getArticles = () => ({
	type: GET_ARTICLES.request,
});

export const articlesActions = {
	getArticles,
};

const initialStage = {
	articles: [],
};

export default function articles(state = initialStage, action = {}) {
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
