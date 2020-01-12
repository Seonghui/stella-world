import React from 'react';
import TagList from '../../home/TagList';

function Sidebar() {
	return (
		<div className="sidebar">
			<p>Popular Tags</p>
			<TagList />
		</div>
	);
}

export default Sidebar;
