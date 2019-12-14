import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

	sagaMiddleware.run(rootSaga);
	return store;
};

export default configureStore;
