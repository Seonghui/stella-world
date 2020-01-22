import React, { useEffect } from 'react';
import TagList from '../../home/TagList';
import useTags from '../../../hooks/useTags';

function Sidebar() {
	const { getTags, tags } = useTags();

	useEffect(() => {
		getTags();
	}, [getTags]);

	return (
		<div className="sidebar">
			<p>Popular Tags</p>
			<TagList tags={tags} isOutlined={false} />
		</div>
	);
}

export default Sidebar;
