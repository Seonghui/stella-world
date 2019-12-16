import React from 'react';
import ArticleListItem from '../ArticleListItem';

function ArticleList({ articles }) {
	return (
		<>
			{articles.map((article, index) => (
				<ArticleListItem article={article} key={index} />
			))}
		</>
	);
}

export default ArticleList;
