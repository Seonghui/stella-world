import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PaginationItem from '../PaginationItem';

function Pagination({ count, limit }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
	const totalPages = count / limit;
	let range = 1;

	useEffect(() => {
		buildPageNumbers();
		// eslint-disable-next-line
	}, [currentPage]);

	const buildPageNumbers = () => {
		let numbers = [];
		if (currentPage < 4) {
			for (let i = 1; i <= 4; i++) {
				numbers.push(i);
			}
		} else if (currentPage > totalPages - 3) {
			for (let i = totalPages - 3; i <= totalPages; i++) {
				numbers.push(i);
			}
		} else {
			numbers = [
				'prev',
				currentPage - range,
				currentPage,
				currentPage + range,
				'next',
			];
		}
		setPageNumbers(numbers);
	};

	const handlePagination = page => {
		setCurrentPage(page);
	};

	return (
		<nav>
			<ul className="pagination">
				<li className="page-item">
					<Link
						onClick={() => handlePagination(1)}
						className="page-link"
						to={`/articles/10/${1}`}
						aria-label="Previous"
					>
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</Link>
				</li>
				<PaginationItem
					pageNumbers={pageNumbers}
					currentPage={currentPage}
					handlePagination={handlePagination}
				/>
				<li className="page-item">
					<Link
						onClick={() => handlePagination(totalPages)}
						className="page-link"
						to={`/articles/10/${50}`}
						aria-label="Next"
					>
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only">Next</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default withRouter(Pagination);
