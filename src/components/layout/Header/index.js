/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isLogin }) {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					conduit
				</Link>
				<ul className="nav navbar-nav pull-xs-right">
					<li className="nav-item">
						<Link to="/" className="nav-link active">
							Home
						</Link>
					</li>
					{isLogin && (
						<>
							<li className="nav-item">
								<a className="nav-link" href="">
									<i className="ion-compose"></i>&nbsp;New Post
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="">
									<i className="ion-gear-a"></i>&nbsp;Settings
								</a>
							</li>
						</>
					)}
					{!isLogin && (
						<>
							<li className="nav-item">
								<Link to="/login" className="nav-link">
									Sign in
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/register" className="nav-link">
									Sign up
								</Link>
							</li>
						</>
					)}
					<Link to="/@seonghui" className="nav-link active">
						Seonghui
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
