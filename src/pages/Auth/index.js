import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function Auth({ location, history }) {
	const { isLogin, isError, errors, login } = useAuth();
	const isLoginPage = location.pathname === '/login' ? true : false;
	const [user, setUser] = useState({
		email: '',
		password: '',
		username: '',
	});

	useEffect(() => {
		if (isLogin) history.push('/');
	}, [isLogin, history]);

	const handleClick = e => {
		e.preventDefault();
		if (isLoginPage)
			login({
				user: {
					email: user.email,
					password: user.password,
				},
			});
	};

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="auth-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">{isLoginPage ? 'Sign in' : 'Sign up'}</h1>
						<p className="text-xs-center">
							{isLoginPage ? <Link to="/register">Need an account?</Link> : <Link to="/login">Have an account?</Link>}
						</p>
						{isError && (
							// TODO: 에러메시지 렌더링
							<ul className="error-messages">
								<li>That email is already taken</li>
							</ul>
						)}

						{/* TODO: FORM 컴포넌트 분리 */}
						<form>
							<fieldset className="form-group">
								{!isLoginPage && (
									<input
										className="form-control form-control-lg"
										type="text"
										name="username"
										placeholder="Your Name"
										onChange={handleChange}
									/>
								)}
							</fieldset>
							<fieldset className="form-group">
								<input
									className="form-control form-control-lg"
									type="text"
									name="email"
									placeholder="Email"
									onChange={handleChange}
								/>
							</fieldset>
							<fieldset className="form-group">
								<input
									className="form-control form-control-lg"
									type="password"
									name="password"
									placeholder="Password"
									onChange={handleChange}
								/>
							</fieldset>
							<button className="btn btn-lg btn-primary pull-xs-right" onClick={handleClick}>
								{isLoginPage ? 'Sign in' : 'Sign up'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withRouter(Auth);
