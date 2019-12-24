import { takeEvery } from 'redux-saga/effects';
import { userService } from '../../api/index';
import { apiSaga } from './index';
import { GET_PROFILE, FOLLOW_USER, UNFOLLOW_USER } from '../modules/user';

function* userSaga() {
	yield takeEvery(GET_PROFILE.request, apiSaga, {
		actionType: GET_PROFILE,
		api: userService.getProfile,
	});
	yield takeEvery(FOLLOW_USER.request, apiSaga, {
		actionType: FOLLOW_USER,
		api: userService.followUser,
	});
	yield takeEvery(UNFOLLOW_USER.request, apiSaga, {
		actionType: UNFOLLOW_USER,
		api: userService.unfollowUser,
	});
}

export default userSaga;
