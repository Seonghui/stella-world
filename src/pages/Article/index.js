/* eslint-disable */
import React, { useEffect } from 'react';
import useArticles from '../../hooks/useArticles';
import { Link } from 'react-router-dom';
import Comment from '../../components/common/Comment';
import marked from 'marked';
import FollowButton from '../../components/common/FollowButton';
import FavoriteButton from '../../components/common/FavoriteButton';

function Article({ match }) {
	const { article, getArticle } = useArticles();
	useEffect(() => {
		getArticle({ slug: match.params.slug });
	}, []);

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

	return (
		<div className="article-page">
			<div className="banner">
				<div className="container">
					<h1>{title}</h1>

					{author && (
						<div className="article-meta">
							<Link to={`/@${author.username}`}>
								<img src={author.image} />
							</Link>
							<div className="info">
								<Link to={`/@${author.username}`} className="author">
									{author.username}
								</Link>
								<span className="date">{createdAt}</span>
								<span className="date">{updatedAt}</span>
							</div>
							<FollowButton username={author.username} />
							<FavoriteButton slug={slug} favorited={favorited}>
								<i className="ion-heart"></i>
								&nbsp; Favorite Post
								<span className="counter"> ({favoritesCount})</span>
							</FavoriteButton>
						</div>
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
					<div className="article-meta">
						<a href="profile.html">
							<img src="http://i.imgur.com/Qr71crq.jpg" />
						</a>
						<div className="info">
							<a href="" className="author">
								Eric Simons
							</a>
							<span className="date">January 20th</span>
						</div>
						<button className="btn btn-sm btn-outline-secondary">
							<i className="ion-plus-round"></i>
							&nbsp; Follow Eric Simons <span className="counter">(10)</span>
						</button>
						&nbsp;
						<button className="btn btn-sm btn-outline-primary">
							<i className="ion-heart"></i>
							&nbsp; Favorite Post <span className="counter">(29)</span>
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-md-8 offset-md-2">
						<Comment />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
