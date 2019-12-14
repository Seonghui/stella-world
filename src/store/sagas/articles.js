import { call, put, takeEvery } from 'redux-saga/effects';
import { articleService } from '../../api/index';
import { GET_ARTICLES } from '../modules/articles';

function* getArticlesSaga() {
	try {
		const response = yield call(articleService.getArticles);
		const { articles } = response.data;
		yield put({ type: GET_ARTICLES.success, payload: articles });
	} catch (e) {
		yield put({ type: GET_ARTICLES.failure });
		throw new Error(e);
	}
}

function* articlesSaga() {
	yield takeEvery(GET_ARTICLES.request, getArticlesSaga);
}

export default articlesSaga;
