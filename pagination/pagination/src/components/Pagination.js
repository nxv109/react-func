import React from 'react';

export default function Pagination({ postsPerPage, totalPosts, handlePaginate }) {
	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a onClick={() => handlePaginate(number)} href="!#" className="page-link">{number}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}