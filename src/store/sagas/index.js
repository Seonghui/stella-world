import { all } from 'redux-saga/effects';
import tagsSaga from './tags';
import articlesSaga from './articles';

export default function* rootSaga() {
	yield all([tagsSaga(), articlesSaga()]);
}
