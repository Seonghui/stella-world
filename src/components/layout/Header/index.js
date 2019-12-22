/* eslint-disable */
import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Header() {
	const { isLogin, user } = useAuth();
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					conduit
				</Link>
				<ul className="nav navbar-nav pull-xs-right">
					<li className="nav-item">
						<NavLink exact to="/" className="nav-link">
							Home
						</NavLink>
					</li>
					{isLogin && (
						<>
							<li className="nav-item">
								<NavLink to="/editor" className="nav-link">
									<i className="ion-compose"></i>&nbsp;New Post
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/settings" className="nav-link">
									<i className="ion-gear-a"></i>&nbsp;Settings
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to={`/@${user.username}`} className="nav-link">
									{user.username}
								</NavLink>
							</li>
						</>
					)}
					{!isLogin && (
						<>
							<li className="nav-item">
								<NavLink to="/login" className="nav-link">
									Sign in
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/register" className="nav-link">
									Sign up
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Header);
