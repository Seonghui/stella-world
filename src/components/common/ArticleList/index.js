import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import ArticleListItem from '../ArticleListItem';
import useArticles from '../../../hooks/useArticles';

function ArticleList({ match, location }) {
	const { getArticles, articles, article } = useArticles();

	const getArticleOptions = useCallback(() => {
		const options = match.params;
		const { pathname } = location;
		if (pathname.includes('favorites')) {
			options.type = 'favorites';
		}
		if (pathname.includes('feed')) {
			options.type = 'feed';
		}
		if (pathname.includes('articles')) {
			options.type = 'articles';
		}
		return options;
	}, [match.params, location]);

	useEffect(() => {
		const options = getArticleOptions();
		getArticles(options);
	}, [getArticles, getArticleOptions, article]);

	return (
		<>
			{articles &&
				articles.map((article, index) => (
					<ArticleListItem article={article} key={index} />
				))}
		</>
	);
}

export default withRouter(ArticleList);
