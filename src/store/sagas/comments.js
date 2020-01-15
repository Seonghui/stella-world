import { takeEvery } from 'redux-saga/effects';
import { commentsService } from '../../api/index';
import { apiSaga } from './index';
import { GET_COMMENTS } from '../modules/comments';

function* commentsSaga() {
	yield takeEvery(GET_COMMENTS.request, apiSaga, {
		actionType: GET_COMMENTS,
		api: commentsService.getComments,
	});
}

export default commentsSaga;
