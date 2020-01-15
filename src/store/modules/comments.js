import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_COMMENTS = makeAsyncActions('GET_COMMENTS');
export const ADD_COMMENT = makeAsyncActions('ADD_COMMENT');

const getComments = payload => ({
	type: GET_COMMENTS.request,
	payload,
});

const addComment = (payload, onSuccess) => ({
	type: ADD_COMMENT.request,
	payload,
	onSuccess,
});

export const commentsActions = {
	addComment,
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
