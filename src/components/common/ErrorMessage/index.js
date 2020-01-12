import React from 'react';

function ErrorMessage({ errors }) {
	const list = Object.keys(errors).map(key => {
		return (
			<li key={key}>
				{key} {errors[key]}
			</li>
		);
	});
	return <ul className="error-messages">{list}</ul>;
}

export default ErrorMessage;
