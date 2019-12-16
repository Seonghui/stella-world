import { call, put, all } from 'redux-saga/effects';
import tagsSaga from './tags';
import articlesSaga from './articles';
import authSaga from './auth';

export function* apiSaga(options, action) {
	try {
		const response = yield call(options.api, action.payload);
		const { data } = response;
		yield put({ type: options.actionType.success, payload: data });
	} catch (e) {
		const { data } = e.response;
		yield put({ type: options.actionType.failure, payload: data.errors });
	}
}

export default function* rootSaga() {
	yield all([tagsSaga(), articlesSaga(), authSaga()]);
}
