import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesActions } from '../store/modules/articles';

export default function useArticles() {
	const dispatch = useDispatch();
	const { articles, articlesCount } = useSelector(
		state => state.articles.articles,
	);

	const getArticles = useCallback(
		options => dispatch(articlesActions.getArticles(options)),
		[dispatch],
	);

	return { getArticles, articles, articlesCount };
}
