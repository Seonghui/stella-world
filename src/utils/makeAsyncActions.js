export default function makeAsyncActions(actionName) {
	return {
		index: actionName,
		request: `${actionName}_REQUEST`,
		success: `${actionName}_SUCCESS`,
		failure: `${actionName}_FAILURE`,
	};
}
