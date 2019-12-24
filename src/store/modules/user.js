import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_PROFILE = makeAsyncActions('GET_PROFILE');
export const FOLLOW_USER = makeAsyncActions('FOLLOW_USER');
export const UNFOLLOW_USER = makeAsyncActions('UNFOLLOW_USER');

const getProfile = options => ({
	type: GET_PROFILE.request,
	payload: {
		options,
	},
});

const followUser = options => ({
	type: FOLLOW_USER.request,
	payload: {
		options,
	},
});

const unfollowUser = options => ({
	type: UNFOLLOW_USER.request,
	payload: {
		options,
	},
});

export const userActions = {
	getProfile,
	followUser,
	unfollowUser,
};

const initialState = {
	profile: {},
};

export default function user(state = initialState, action = {}) {
	switch (action.type) {
		case GET_PROFILE.success:
		case FOLLOW_USER.success:
		case UNFOLLOW_USER.success:
			return {
				...state,
				profile: action.payload.profile,
			};
		case GET_PROFILE.failure:
		case FOLLOW_USER.failure:
		case UNFOLLOW_USER.failure:
			return {
				...state,
				profile: {},
			};
		default:
			return state;
	}
}
