import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesActions } from '../store/modules/articles';

export default function useArticles() {
	const dispatch = useDispatch();
	const { articles, articlesCount } = useSelector(
		state => state.articles.articles,
	);

	const { article } = useSelector(state => state.articles);

	const getArticles = useCallback(
		options => dispatch(articlesActions.getArticles(options)),
		[dispatch],
	);

	const getArticle = useCallback(
		options => dispatch(articlesActions.getArticle(options)),
		[dispatch],
	);

	const favoriteArticle = useCallback(
		options => dispatch(articlesActions.favoriteArticle(options)),
		[dispatch],
	);

	const unfavoriteArticle = useCallback(
		options => dispatch(articlesActions.unfavoriteArticle(options)),
		[dispatch],
	);

	return {
		getArticles,
		articles,
		articlesCount,
		getArticle,
		article,
		favoriteArticle,
		unfavoriteArticle,
	};
}
