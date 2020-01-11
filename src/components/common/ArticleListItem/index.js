/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function ArticleListItem({ article }) {
	return (
		<div className="article-preview">
			<div className="article-meta">
				<Link to={`/@${article.author.username}`}>
					<img src={article.author.image} alt={article.author.username} />
				</Link>
				<div className="info">
					<Link to={`/@${article.author.username}`} className="author">
						{article.author.username}
					</Link>
					<span className="date">{article.author.updatedAt}</span>
				</div>
				<button className="btn btn-outline-primary btn-sm pull-xs-right">
					<i className="ion-heart"></i> {article.favoritesCount}
				</button>
			</div>
			<Link to={`/article/${article.slug}`} className="preview-link">
				<h1>{article.title}</h1>
				<p>{article.description}</p>
				<span>Read more...</span>
			</Link>
		</div>
	);
}

export default ArticleListItem;
