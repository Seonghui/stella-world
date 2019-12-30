import makeAsyncActions from '../../utils/makeAsyncActions';
import { saveToken, removeToken } from '../../utils/localStorage';
import { setHeader } from '../../api/apiConfig';

export const TEMP_LOGIN = 'TEMP_LOGIN';
export const RESET_ERROR = 'RESET_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGIN = makeAsyncActions('LOGIN');
export const REGISTER = makeAsyncActions('REGISTER');
export const GET_CURRENT_USER = makeAsyncActions('GET_CURRENT_USER');
export const UPDATE_USER = makeAsyncActions('UPDATE_USER');

const getCurrentUser = () => ({
	type: GET_CURRENT_USER.request,
});

const login = payload => ({
	type: LOGIN.request,
	payload,
});

const register = payload => ({
	type: REGISTER.request,
	payload,
});

const tempLogin = () => ({
	type: TEMP_LOGIN,
});

const resetError = () => ({
	type: RESET_ERROR,
});

const logout = () => ({
	type: LOGOUT,
});

const updateUser = payload => ({
	type: UPDATE_USER.request,
	payload,
});

export const authActions = {
	login,
	getCurrentUser,
	tempLogin,
	register,
	resetError,
	updateUser,
	logout,
};

const initialState = {
	isLogin: false,
	user: {},
	isError: false,
	errors: {},
};

export default function auth(state = initialState, action = {}) {
	switch (action.type) {
		case LOGIN.success:
		case REGISTER.success:
		case GET_CURRENT_USER.success:
		case UPDATE_USER.success:
			saveToken(action.payload.user.token);
			setHeader();
			return {
				...state,
				isLogin: true,
				user: action.payload.user,
			};
		case LOGIN.failure:
		case REGISTER.failure:
		case GET_CURRENT_USER.failure:
			removeToken();
			setHeader();
			return {
				...state,
				isError: true,
				errors: action.payload,
			};
		case TEMP_LOGIN:
			return {
				...state,
				isLogin: true,
			};
		case UPDATE_USER.failure:
			return {
				...state,
				isError: true,
				errors: action.payload,
			};
		case RESET_ERROR:
			return {
				...state,
				isError: false,
				errors: {},
			};
		case LOGOUT: {
			removeToken();
			setHeader();
			return initialState;
		}
		default:
			return state;
	}
}
