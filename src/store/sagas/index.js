import { all } from 'redux-saga/effects';
import tagsSaga from './tags';

export default function* rootSaga() {
	yield all([tagsSaga()]);
}
