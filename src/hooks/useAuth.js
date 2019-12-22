import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { authActions } from '../store/modules/auth';

export default function useAuth() {
	const { isLogin, isError, errors, user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const login = useCallback(user => dispatch(authActions.login(user)), [dispatch]);
	const getCurrentUser = useCallback(() => dispatch(authActions.getCurrentUser()), [dispatch]);

	return { isLogin, isError, errors, user, login, getCurrentUser };
}
