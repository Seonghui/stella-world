import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments, isLogin, user, deleteComment }) {
	if (comments.length) {
		const list = comments.map(comment => {
			const isMe = isLogin && user.username === comment.author.username;
			return (
				<div className="card" key={comment.id}>
					<div className="card-block">
						<p className="card-text">{comment.body}</p>
					</div>
					<div className="card-footer">
						<Link
							to={`/@${comment.author.username}`}
							className="comment-author"
						>
							<img
								src={comment.author.image}
								className="comment-author-img"
								alt={comment.author.username}
							/>
						</Link>
						&nbsp;
						<Link
							to={`/@${comment.author.username}`}
							className="comment-author"
						>
							{comment.author.username}
						</Link>
						<span className="date-posted">{comment.createdAt}</span>
						{isMe && (
							<span
								onClick={() => deleteComment(comment.id)}
								className="mod-options"
							>
								<i className="ion-trash-a"></i>
							</span>
						)}
					</div>
				</div>
			);
		});
		return list;
	}
	return null;
}

export default CommentList;
