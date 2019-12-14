import React, { useEffect } from 'react';
import useArticles from '../../../hooks/useArticles';
import ArticleListItem from '../ArticleListItem';

function ArticleList() {
	const { getArticles, articles } = useArticles();

	useEffect(() => {
		getArticles();
	}, [getArticles]);

	return (
		<>
			{articles.map((article, index) => (
				<ArticleListItem article={article} key={index} />
			))}
		</>
	);
}

export default ArticleList;
