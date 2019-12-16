import React from 'react';
import TagList from '../../home/TagList';

function Sidebar({ tags }) {
	return (
		<div className="sidebar">
			<TagList tags={tags} />
		</div>
	);
}

export default Sidebar;
