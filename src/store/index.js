import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';
import { loadToken } from '../utils/localStorage';
import { authActions } from './modules/auth';
import { setHeader } from '../api/apiConfig';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware)),
	);

	function initialize() {
		const token = loadToken();
		// 로그인 토큰 없을 경우 아무것도 안 함
		if (!token) return;
		// 새로고침 이후 토큰이 있을 경우 임시 로그인 처리
		setHeader();
		store.dispatch(authActions.tempLogin());
		store.dispatch(authActions.getCurrentUser());
	}

	sagaMiddleware.run(rootSaga);

	initialize();
	return store;
};

export default configureStore;
