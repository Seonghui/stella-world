/* eslint-disable */
import React, { useEffect } from 'react';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import useComments from '../../../hooks/useComments';

function Comment({ slug }) {
	const { comments, getComments } = useComments();
	useEffect(() => {
		if (slug) {
			getComments({ slug });
		}
	}, [slug]);
	return (
		<>
			<CommentForm />
			<CommentList comments={comments} />
		</>
	);
}

export default Comment;
