/* eslint-disable */
import React from 'react';

function CommentForm({ addComment, handleChange, values }) {
	const _onSubmit = e => {
		e.preventDefault();
		addComment(values);
	};

	return (
		<form className="card comment-form" onSubmit={_onSubmit}>
			<div className="card-block">
				<textarea
					className="form-control"
					placeholder="Write a comment..."
					rows="3"
					name="comment"
					onChange={handleChange}
					value={values.comment || ''}
				></textarea>
			</div>
			<div className="card-footer">
				<img
					src="http://i.imgur.com/Qr71crq.jpg"
					className="comment-author-img"
				/>
				<button type="submit" className="btn btn-sm btn-primary">
					Post Comment
				</button>
			</div>
		</form>
	);
}

export default CommentForm;
