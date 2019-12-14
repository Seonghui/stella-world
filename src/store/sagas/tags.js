import { call, put, takeEvery } from 'redux-saga/effects';
import { tagService } from '../../api/index';
import { GET_TAGS } from '../modules/tags';

function* getTagSaga() {
	try {
		const response = yield call(tagService.get);
		const { tags } = response.data;
		yield put({ type: GET_TAGS.success, payload: tags });
	} catch (e) {
		yield put({ type: GET_TAGS.failure });
		throw new Error(e);
	}
}

function* tagsSaga() {
	yield takeEvery(GET_TAGS.request, getTagSaga);
}

export default tagsSaga;
