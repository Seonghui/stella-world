import { takeLatest } from 'redux-saga/effects';
import { authService } from '../../api/index';
import { apiSaga } from './index';
import { LOGIN, REGISTER, GET_CURRENT_USER } from '../modules/auth';

function* authSaga() {
	yield takeLatest(REGISTER.request, apiSaga, {
		actionType: REGISTER,
		api: authService.register,
	});
	yield takeLatest(LOGIN.request, apiSaga, {
		actionType: LOGIN,
		api: authService.login,
	});
	yield takeLatest(GET_CURRENT_USER.request, apiSaga, {
		actionType: GET_CURRENT_USER,
		api: authService.getCurrentUser,
	});
}

export default authSaga;
