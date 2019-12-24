import { combineReducers } from 'redux';
import tags from './tags';
import articles from './articles';
import auth from './auth';
import user from './user';

export default combineReducers({
	tags,
	articles,
	auth,
	user,
});
