import React from 'react';
import useArticles from '../../../hooks/useArticles';

function FavoriteButton({ children, slug, favorited }) {
	const { favoriteArticle, unfavoriteArticle } = useArticles();
	const buttonStyle = favorited ? 'btn-primary' : 'btn-outline-primary';
	const handleToggleFavorite = () => {
		if (favorited) {
			unfavoriteArticle({ slug });
		} else {
			favoriteArticle({ slug });
		}
	};
	return (
		<button
			onClick={handleToggleFavorite}
			className={`btn ${buttonStyle} btn-sm pull-xs-right`}
		>
			{children}
		</button>
	);
}

export default FavoriteButton;
