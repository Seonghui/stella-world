import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsActions } from '../store/modules/tags';

export default function useTags() {
	const dispatch = useDispatch();
	const { tags } = useSelector(state => state.tags);

	const getTags = useCallback(() => dispatch(tagsActions.getTags()), [dispatch]);

	return { getTags, tags };
}
