import React, { useEffect } from 'react';
import ArticleList from '../../components/article/ArticleList';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import FollowButton from '../../components/common/FollowButton';

function Profile({ match }) {
	const { getProfile, profile } = useUser();
	const { isLogin, user } = useAuth();
	const isMe = isLogin && user.username === profile.username;
	const isFavoriteTab = match.params.type === 'favorites';

	useEffect(() => {
		const options = match.params;
		getProfile(options);
	}, [getProfile, match.params]);

	const ProfileButton = () => {
		if (isMe) {
			return (
				<Link
					to="/settings"
					className="btn btn-sm btn-outline-secondary action-btn"
				>
					<i className="ion-gear-a"></i>
					Edit Profile Settings
				</Link>
			);
		}
		return null;
	};

	return (
		<div className="profile-page">
			<div className="user-info">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-10 offset-md-1">
							<img
								src={profile.image}
								className="user-img"
								alt={`${profile.username} profile`}
							/>
							<h4>{profile.username}</h4>
							<p>{profile.bio}</p>
							<ProfileButton />
							<FollowButton username={profile.username} />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-10 offset-md-1">
						<div className="articles-toggle">
							<ul className="nav nav-pills outline-active">
								<li className="nav-item">
									<Link
										to={`/@${match.params.username}`}
										className={`nav-link${!isFavoriteTab ? ' active' : ''}`}
									>
										My Articles
									</Link>
								</li>
								<li className="nav-item">
									<Link
										to={`${match.url}/favorites`}
										className={`nav-link${isFavoriteTab ? ' active' : ''}`}
									>
										Favorited Articles
									</Link>
								</li>
							</ul>
						</div>

						<ArticleList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
