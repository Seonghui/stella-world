/* eslint-disable */
import React, { useEffect } from 'react';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import useComments from '../../../hooks/useComments';
import useForm from '../../../hooks/useForm';
import useAuth from '../../../hooks/useAuth';

function Comment({ slug }) {
	const { comments, getComments, addComment, deleteComment } = useComments();
	const { handleChange, values, handleResetForm } = useForm();
	const { isLogin, user } = useAuth();
	useEffect(() => {
		if (slug) {
			getComments({ slug });
		}
	}, [slug]);
	const onSuccessAddComment = () => {
		getComments({ slug });
		handleResetForm();
	};
	const onSuccessDeleteComment = () => {
		getComments({ slug });
	};
	const handleAddComment = values => {
		addComment(
			{ slug: slug, comment: { body: values.comment } },
			onSuccessAddComment,
		);
	};

	const handleDeleteComment = id => {
		deleteComment({ slug, id }, onSuccessDeleteComment);
	};
	return (
		<>
			<CommentForm
				handleChange={handleChange}
				values={values}
				addComment={handleAddComment}
				user={user}
			/>
			<CommentList
				comments={comments}
				deleteComment={handleDeleteComment}
				isLogin={isLogin}
				user={user}
			/>
		</>
	);
}

export default Comment;
