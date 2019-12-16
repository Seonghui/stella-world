import React from 'react';

function TagList({ tags }) {
	return (
		<>
			<p>Popular Tags</p>
			<ul className="tag-list">
				{tags.map((tag, index) => {
					return (
						<li className="tag-pill tag-default" key={index}>
							{tag}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default TagList;
