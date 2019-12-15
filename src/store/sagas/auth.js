import { call, put, takeLatest } from 'redux-saga/effects';
import { authService } from '../../api/index';
import { LOGIN } from '../modules/auth';

function* loginSaga(action) {
	try {
		const response = yield call(authService.login, action.payload);
		const { user } = response.data;
		yield put({ type: LOGIN.success, payload: user });
	} catch (e) {
		const { data } = e.response;
		yield put({ type: LOGIN.failure, payload: data.errors });
	}
}

function* authSaga() {
	yield takeLatest(LOGIN.request, loginSaga);
}

export default authSaga;
