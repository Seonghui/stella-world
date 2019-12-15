import { combineReducers } from 'redux';
import tags from './tags';
import articles from './articles';
import auth from './auth';

export default combineReducers({
	tags,
	articles,
	auth,
});
