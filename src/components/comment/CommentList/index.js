import React from 'react';
import { Link } from 'react-router-dom';

function CommentList({ comments }) {
	if (comments.length) {
		const list = comments.map(comment => {
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
					</div>
				</div>
			);
		});
		return list;
	}
	return null;
}

export default CommentList;
