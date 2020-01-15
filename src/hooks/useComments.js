import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsActions } from '../store/modules/comments';

export default function useComments() {
	const dispatch = useDispatch();

	const { comments } = useSelector(state => state.comments);

	const getComments = useCallback(
		options => dispatch(commentsActions.getComments(options)),
		[dispatch],
	);

	return {
		comments,
		getComments,
	};
}
