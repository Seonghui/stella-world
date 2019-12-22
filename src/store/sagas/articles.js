import { call, put, takeEvery } from 'redux-saga/effects';
import { articlesService } from '../../api/index';
import { GET_ARTICLES } from '../modules/articles';

function getArticleApiType(options) {
	if (options['type'] === 'favorites') return 'getByFavorites';
	else if ('tag' in options) return 'getByTag';
	else if ('username' in options) return 'getByAuthor';
	else return 'getAll';
}

export function* apiArticlesSaga(options, action) {
	try {
		const type = getArticleApiType(action.payload.options);
		const response = yield call(articlesService[type], action.payload.options);
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
}

export default articlesSaga;
