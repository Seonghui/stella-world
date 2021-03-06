import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesActions } from '../store/modules/articles';

export default function useArticles() {
	const dispatch = useDispatch();
	const { articles, articlesCount } = useSelector(
		state => state.articles.articles,
	);

	const { article, errors, isError, limit } = useSelector(
		state => state.articles,
	);

	const getArticles = useCallback(
		options => dispatch(articlesActions.getArticles(options)),
		[dispatch],
	);

	const getArticle = useCallback(
		options => dispatch(articlesActions.getArticle(options)),
		[dispatch],
	);

	const createArticle = useCallback(
		(options, onSuccess) =>
			dispatch(articlesActions.createArticle(options, onSuccess)),
		[dispatch],
	);

	const updateArticle = useCallback(
		(options, onSuccess) =>
			dispatch(articlesActions.updateArticle(options, onSuccess)),
		[dispatch],
	);

	const deleteArticle = useCallback(
		(options, onSuccess) =>
			dispatch(articlesActions.deleteArticle(options, onSuccess)),
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

	const resetError = useCallback(() => dispatch(articlesActions.resetError()), [
		dispatch,
	]);

	return {
		getArticles,
		articles,
		articlesCount,
		getArticle,
		article,
		createArticle,
		updateArticle,
		favoriteArticle,
		unfavoriteArticle,
		errors,
		isError,
		resetError,
		deleteArticle,
		limit,
	};
}
