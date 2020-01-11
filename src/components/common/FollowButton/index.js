import React from 'react';
import useUser from '../../../hooks/useUser';
import useAuth from '../../../hooks/useAuth';
import { withRouter } from 'react-router-dom';

function FollowButton({ history, location, username }) {
	const { profile, followUser, unfollowUser } = useUser();
	const { isLogin, user } = useAuth();
	const isMe = isLogin && user.username === username;
	const isFollowing = !isMe && profile.following;
	const isUnfollowing = !isMe && !profile.following;
	const handleToggleFollow = () => {
		if (!isLogin) {
			history.push({
				pathname: '/login',
				state: {
					prevPath: location.pathname,
				},
			});
			return;
		}
		if (isFollowing)
			unfollowUser({
				username,
			});
		if (isUnfollowing)
			followUser({
				username,
			});
	};
	if (isMe) {
		return null;
	}
	return (
		<button
			onClick={handleToggleFollow}
			className="btn btn-sm btn-outline-secondary action-btn"
		>
			<i className="ion-plus-round"></i>
			&nbsp; {isFollowing ? 'Unfollow' : 'Follow'} {username}
		</button>
	);
}

export default withRouter(FollowButton);
