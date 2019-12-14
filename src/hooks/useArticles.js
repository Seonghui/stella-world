import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesActions } from '../store/modules/articles';

export default function useArticles() {
	const dispatch = useDispatch();
	const { articles } = useSelector(state => state.articles);

	const getArticles = useCallback(() => dispatch(articlesActions.getArticles()), [dispatch]);

	return { getArticles, articles };
}
