import makeAsyncActions from '../../utils/makeAsyncActions';

export const LOGIN = makeAsyncActions('LOGIN');

const login = ({ user }) => ({
	type: LOGIN.request,
	payload: {
		user,
	},
});

export const authActions = {
	login,
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
			return {
				...state,
				isLogin: true,
				user: action.payload,
			};
		case LOGIN.failure:
			return {
				...state,
				isError: true,
				errors: action.payload,
			};
		default:
			return state;
	}
}
