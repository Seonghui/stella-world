import { combineReducers } from 'redux';
import tags from './tags';
import articles from './articles';

export default combineReducers({
	tags,
	articles,
});
