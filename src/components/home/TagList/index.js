import React from 'react';
import { Link } from 'react-router-dom';

function TagList({ tags, isOutlined }) {
	return (
		<ul className="tag-list">
			{tags &&
				tags.map((tag, index) => {
					return (
						<li key={index}>
							<Link
								className={`tag-pill tag-default${
									isOutlined ? ' tag-outline' : ''
								}`}
								to={`/tag/${tag}/10/0`}
							>
								{tag}
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default TagList;
