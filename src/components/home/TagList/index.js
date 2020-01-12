import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTags from '../../../hooks/useTags';

function TagList() {
	const { getTags, tags } = useTags();
	useEffect(() => {
		getTags();
	}, [getTags]);

	return (
		<ul className="tag-list">
			{tags.map((tag, index) => {
				return (
					<li key={index}>
						<Link className="tag-pill tag-default" to={`/tag/${tag}/10/0`}>
							{tag}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default TagList;
