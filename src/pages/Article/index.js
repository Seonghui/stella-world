/* eslint-disable */
import React, { useEffect } from 'react';
import useArticles from '../../hooks/useArticles';
import { Link } from 'react-router-dom';
import Comment from '../../components/comment/Comment';
import marked from 'marked';
import FollowButton from '../../components/common/FollowButton';
import FavoriteButton from '../../components/common/FavoriteButton';
import useAuth from '../../hooks/useAuth';
import ArticleMeta from '../../components/article/ArticleMeta';

function Article({ match, history }) {
	const { article, getArticle, deleteArticle } = useArticles();
	const { user } = useAuth();

	const {
		slug,
		title,
		description,
		body,
		tagList,
		createdAt,
		updatedAt,
		favorited,
		favoritesCount,
		author,
	} = article;

	useEffect(() => {
		getArticle({ slug: match.params.slug });
	}, []);

	const onSuccess = () => {
		history.goBack();
	};

	const handleDeleteArticle = slug => {
		deleteArticle({ slug }, onSuccess);
	};

	return (
		<div className="article-page">
			<div className="banner">
				<div className="container">
					<h1>{title}</h1>

					{author && (
						<ArticleMeta
							article={article}
							user={user}
							deleteArticle={handleDeleteArticle}
						/>
					)}
				</div>
			</div>

			<div className="container page">
				<div className="row article-content">
					<div
						className="col-md-12"
						dangerouslySetInnerHTML={{ __html: body && marked(body) }}
					></div>
				</div>

				<hr />

				<div className="article-actions">
					{author && (
						<ArticleMeta
							article={article}
							user={user}
							deleteArticle={handleDeleteArticle}
						/>
					)}
				</div>

				<div className="row">
					<div className="col-xs-12 col-md-8 offset-md-2">
						<Comment slug={slug} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
