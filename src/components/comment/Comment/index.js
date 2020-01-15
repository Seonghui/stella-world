/* eslint-disable */
import React, { useEffect } from 'react';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import useComments from '../../../hooks/useComments';
import useForm from '../../../hooks/useForm';

function Comment({ slug }) {
	const { comments, getComments, addComment } = useComments();
	const { handleChange, values, handleResetForm } = useForm();
	useEffect(() => {
		if (slug) {
			getComments({ slug });
		}
	}, [slug]);
	const onSuccess = () => {
		getComments({ slug });
		handleResetForm();
	};
	const handleAddComment = values => {
		addComment({ slug: slug, comment: { body: values.comment } }, onSuccess);
	};
	return (
		<>
			<CommentForm
				handleChange={handleChange}
				values={values}
				addComment={handleAddComment}
			/>
			<CommentList comments={comments} />
		</>
	);
}

export default Comment;
