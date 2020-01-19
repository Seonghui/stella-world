import { takeEvery } from 'redux-saga/effects';
import { commentsService } from '../../api/index';
import { apiSaga } from './index';
import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from '../modules/comments';

function* commentsSaga() {
	yield takeEvery(GET_COMMENTS.request, apiSaga, {
		actionType: GET_COMMENTS,
		api: commentsService.getComments,
	});

	yield takeEvery(ADD_COMMENT.request, apiSaga, {
		actionType: ADD_COMMENT,
		api: commentsService.addComment,
	});

	yield takeEvery(DELETE_COMMENT.request, apiSaga, {
		actionType: DELETE_COMMENT,
		api: commentsService.deleteComment,
	});
}

export default commentsSaga;
