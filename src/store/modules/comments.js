import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_COMMENTS = makeAsyncActions('GET_COMMENTS');

const getComments = payload => ({
	type: GET_COMMENTS.request,
	payload,
});

export const commentsActions = {
	getComments,
};

const initialState = {
	comments: [],
};

export default function comments(state = initialState, action = {}) {
	switch (action.type) {
		case GET_COMMENTS.success:
			return {
				...state,
				comments: action.payload.comments,
			};
		case GET_COMMENTS.failure:
			return {
				...state,
				comments: {},
			};
		default:
			return state;
	}
}
