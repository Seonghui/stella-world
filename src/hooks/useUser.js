import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/modules/user';

export default function useUser() {
	const dispatch = useDispatch();
	const { profile } = useSelector(state => state.user);

	const getProfile = useCallback(
		options => dispatch(userActions.getProfile(options)),
		[dispatch],
	);

	const followUser = useCallback(
		options => dispatch(userActions.followUser(options)),
		[dispatch],
	);

	const unfollowUser = useCallback(
		options => dispatch(userActions.unfollowUser(options)),
		[dispatch],
	);

	return { getProfile, profile, followUser, unfollowUser };
}
