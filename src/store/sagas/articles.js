import { call, put, takeEvery } from 'redux-saga/effects';
import { articlesService } from '../../api/index';
import {
	GET_ARTICLES,
	GET_ARTICLE,
	FAVORITE_ARTICLE,
	UNFAVORITE_ARTICLE,
} from '../modules/articles';
import { apiSaga } from '.';

function getArticleApiType(options) {
	if (options['type'] === 'favorites') return 'getByFavorites';
	else if (options['type'] === 'feed') return 'getFeedArticles';
	else if ('tag' in options) return 'getByTag';
	else if ('username' in options) return 'getByAuthor';
	else return 'getAll';
}

export function* apiArticlesSaga(options, action) {
	try {
		const type = getArticleApiType(action.payload);
		const response = yield call(articlesService[type], action.payload);
		const { data } = response;
		yield put({ type: options.actionType.success, payload: data });
	} catch (e) {
		const { data } = e.response;
		yield put({ type: options.actionType.failure, payload: data.errors });
	}
}

function* articlesSaga() {
	yield takeEvery(GET_ARTICLES.request, apiArticlesSaga, {
		actionType: GET_ARTICLES,
	});

	yield takeEvery(GET_ARTICLE.request, apiSaga, {
		actionType: GET_ARTICLE,
		api: articlesService.getArticle,
	});

	yield takeEvery(FAVORITE_ARTICLE.request, apiSaga, {
		actionType: FAVORITE_ARTICLE,
		api: articlesService.favoriteArticle,
	});

	yield takeEvery(UNFAVORITE_ARTICLE.request, apiSaga, {
		actionType: UNFAVORITE_ARTICLE,
		api: articlesService.unfavoriteArticle,
	});
}

export default articlesSaga;
