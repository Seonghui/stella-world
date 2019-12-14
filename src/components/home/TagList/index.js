import React, { useEffect } from 'react';
import useTags from '../../../hooks/useTags';

function TagList() {
	useEffect(() => {
		getTags();
	}, []);

	const { getTags, tags } = useTags();

	return (
		<>
			<p>Popular Tags</p>
			<div className="tag-list">
				{tags.map((tag, index) => {
					return (
						<a href="" className="tag-pill tag-default" key={index}>
							{tag}
						</a>
					);
				})}
			</div>
		</>
	);
}

export default TagList;
