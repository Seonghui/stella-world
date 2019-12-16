import { takeEvery } from 'redux-saga/effects';
import { articlesService } from '../../api/index';
import { apiSaga } from './index';
import { GET_ARTICLES } from '../modules/articles';

function* articlesSaga() {
	yield takeEvery(GET_ARTICLES.request, apiSaga, {
		actionType: GET_ARTICLES,
		api: articlesService.getArticles,
	});
}

export default articlesSaga;
