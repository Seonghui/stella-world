import React from 'react';

function TagListForm({ handleKeyDown }) {
	const _onKeyDown = e => {
		if (e.keyCode === 13) {
			handleKeyDown(e.target.value);
			e.target.value = '';
		}
	};
	return (
		<input
			type="text"
			className="form-control"
			placeholder="Enter tags"
			onKeyDown={_onKeyDown}
		/>
	);
}

export default TagListForm;
