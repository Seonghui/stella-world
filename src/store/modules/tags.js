import makeAsyncActions from '../../utils/makeAsyncActions';

export const GET_TAGS = makeAsyncActions('GET_TAGS');

const getTags = () => ({
	type: GET_TAGS.request,
});

export const tagsActions = {
	getTags,
};

const initialState = {
	tags: [],
};

export default function tags(state = initialState, action = {}) {
	switch (action.type) {
		case GET_TAGS.success:
			return {
				...state,
				tags: action.payload,
			};
		case GET_TAGS.failure:
			return {
				...state,
				tags: [],
			};
		default:
			return state;
	}
}
