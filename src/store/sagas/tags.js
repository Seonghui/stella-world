import { takeEvery } from 'redux-saga/effects';
import { tagsService } from '../../api/index';
import { apiSaga } from './index';
import { GET_TAGS } from '../modules/tags';

function* tagsSaga() {
	yield takeEvery(GET_TAGS.request, apiSaga, {
		actionType: GET_TAGS,
		api: tagsService.getTags,
	});
}

export default tagsSaga;
