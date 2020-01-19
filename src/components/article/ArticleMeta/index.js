import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../../common/FollowButton';
import FavoriteButton from '../../common/FavoriteButton';

function ArticleMeta({ article, user, deleteArticle }) {
	const {
		slug,
		createdAt,
		updatedAt,
		favorited,
		favoritesCount,
		author,
	} = article;

	const isMe = author.username === user.username;

	const DeleteButton = () => {
		if (isMe) {
			return (
				<button
					className="btn btn-outline-danger btn-sm pull-xs-right"
					onClick={() => deleteArticle(slug)}
				>
					<i className="ion-trash-a"></i>
					<span>&nbsp;Delete Article</span>
				</button>
			);
		}
		return null;
	};

	const EditButton = () => {
		if (isMe) {
			return (
				<Link
					className="btn btn-outline-secondary btn-sm pull-xs-right"
					to={`/editor/${slug}`}
				>
					<i className="ion-edit"></i>Edit Article
				</Link>
			);
		}
		return null;
	};
	return (
		<div className="article-meta">
			<Link to={`/@${author.username}`}>
				<img src={author.image} alt={author.username} />
			</Link>
			<div className="info">
				<Link to={`/@${author.username}`} className="author">
					{author.username}
				</Link>
				<span className="date">{createdAt}</span>
				<span className="date">{updatedAt}</span>
			</div>
			<FollowButton username={author.username} />
			<EditButton />
			{!isMe && (
				<FavoriteButton slug={slug} favorited={favorited}>
					<i className="ion-heart"></i>
					&nbsp; Favorite Post
					<span className="counter"> ({favoritesCount})</span>
				</FavoriteButton>
			)}

			<DeleteButton />
		</div>
	);
}

export default ArticleMeta;
