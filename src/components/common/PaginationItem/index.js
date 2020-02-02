import React from 'react';
import { Link } from 'react-router-dom';

function PaginationItem({ pageNumbers, currentPage, handlePagination }) {
	return pageNumbers.map(item => {
		let page;
		if (item === 'prev') {
			page = currentPage - 2;
		} else if (item === 'next') {
			page = currentPage + 2;
		} else {
			page = item;
		}
		return (
			<li key={item} className="page-item">
				<Link
					onClick={() => handlePagination(page)}
					className="page-link"
					to={`/articles/10/${page}`}
				>
					{isNaN(item) ? '...' : item}
				</Link>
			</li>
		);
	});
}

export default PaginationItem;
