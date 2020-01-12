import React from 'react';

function TagList({ tags, handleRemoveTagItem }) {
	return (
		<ul className="tag-list">
			{tags &&
				tags.map((tag, index) => {
					return (
						<li key={index}>
							<span className="tag-pill tag-default">
								<i
									className="ion-close-round"
									onClick={() => handleRemoveTagItem(tag)}
								></i>
								{tag}
							</span>
						</li>
					);
				})}
		</ul>
	);
}

export default TagList;
