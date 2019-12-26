import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import formValidation from '../../utils/formValidation';

function Auth({ location, history }) {
	const { isLogin, isError, errors, login } = useAuth();
	const { handleChange, handleSubmit, values, formErrors } = useForm(
		handleLogin,
		formValidation,
	);
	const isLoginPage = location.pathname === '/login' ? true : false;
	const { username, email, password } = values;

	useEffect(() => {
		if (isLogin) history.push('/');
	}, [isLogin, history]);

	function handleLogin() {
		if (isLoginPage)
			login({
				user: {
					email,
					password,
				},
			});
	}

	return (
		<div className="auth-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">
							{isLoginPage ? 'Sign in' : 'Sign up'}
						</h1>
						<p className="text-xs-center">
							{isLoginPage ? (
								<Link to="/register">Need an account?</Link>
							) : (
								<Link to="/login">Have an account?</Link>
							)}
						</p>
						{isError && (
							// TODO: 에러메시지 렌더링
							<ul className="error-messages">
								<li>That email is already taken</li>
							</ul>
						)}

						{/* TODO: FORM 컴포넌트 분리 */}
						<form onSubmit={handleSubmit}>
							<fieldset className="form-group">
								{!isLoginPage && (
									<input
										className="form-control form-control-lg"
										type="text"
										name="username"
										placeholder="Your Name"
										value={username || ''}
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
									value={email || ''}
									onChange={handleChange}
								/>
								{formErrors.email && (
									<p className="error-messages">{formErrors.email}</p>
								)}
							</fieldset>
							<fieldset className="form-group">
								<input
									className="form-control form-control-lg"
									type="password"
									name="password"
									placeholder="Password"
									value={password || ''}
									onChange={handleChange}
									required
								/>
								{formErrors.password && (
									<p className="error-messages">{formErrors.password}</p>
								)}
							</fieldset>
							<button
								type="submit"
								className="btn btn-lg btn-primary pull-xs-right"
							>
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
