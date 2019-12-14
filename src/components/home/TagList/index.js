import React, { useEffect } from 'react';
import useTags from '../../../hooks/useTags';

function TagList() {
	const { getTags, tags } = useTags();

	useEffect(() => {
		getTags();
	}, [getTags]);

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
