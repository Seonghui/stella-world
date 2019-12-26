import makeAsyncActions from '../../utils/makeAsyncActions';
import { saveToken, removeToken } from '../../utils/localStorage';

export const TEMP_LOGIN = 'TEMP_LOGIN';
export const RESET_ERROR = 'RESET_ERROR';
export const LOGIN = makeAsyncActions('LOGIN');
export const REGISTER = makeAsyncActions('REGISTER');
export const GET_CURRENT_USER = makeAsyncActions('GET_CURRENT_USER');

const getCurrentUser = () => ({
	type: GET_CURRENT_USER.request,
});

const login = payload => ({
	type: LOGIN.request,
	payload: {
		user: {
			email: payload.email,
			password: payload.password,
		},
	},
});

const register = payload => ({
	type: REGISTER.request,
	payload: {
		user: {
			username: payload.username,
			email: payload.email,
			password: payload.password,
		},
	},
});

const tempLogin = () => ({
	type: TEMP_LOGIN,
});

const resetError = () => ({
	type: RESET_ERROR,
});

export const authActions = {
	login,
	getCurrentUser,
	tempLogin,
	register,
	resetError,
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
			saveToken(action.payload.user.token);
			return {
				...state,
				isLogin: true,
				user: action.payload.user,
			};
		case LOGIN.failure:
		case REGISTER.failure:
		case GET_CURRENT_USER.failure:
			removeToken();
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
		case RESET_ERROR:
			return {
				...state,
				isError: false,
				errors: {},
			};
		default:
			return state;
	}
}
