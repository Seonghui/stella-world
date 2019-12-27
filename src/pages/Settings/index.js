/* eslint-disable */
import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';
import formValidation from '../../utils/formValidation';

function Settings({ location, history }) {
	const { user, updateUser, resetError, logout, errors, isError } = useAuth();
	const {
		handleChange,
		handleSubmit,
		values,
		handleResetForm,
		setInitialValue,
	} = useForm(onEditFormSubmit, formValidation);

	useEffect(() => {
		handleResetForm();
		resetError();
	}, [location, history]);

	useEffect(() => {
		setInitialValue({
			username: user.username,
			email: user.email,
			bio: user.bio,
			image: user.image,
		});
	}, [user]);

	function onEditFormSubmit() {
		updateUser(values);
	}

	const handleLogout = e => {
		e.preventDefault();
		logout();
		history.push('/');
	};

	const ErrorMessage = ({ errors }) => {
		const list = Object.keys(errors).map(key => {
			return (
				<li key={key}>
					{key} {errors[key]}
				</li>
			);
		});
		return <ul className="error-messages">{list}</ul>;
	};

	return (
		<div className="settings-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">Your Settings</h1>

						{isError && <ErrorMessage errors={errors} />}

						<form onSubmit={handleSubmit}>
							<fieldset>
								<fieldset className="form-group">
									<input
										className="form-control"
										type="text"
										name="image"
										placeholder="URL of profile picture"
										onChange={handleChange}
										value={values.image || ''}
									/>
								</fieldset>
								<fieldset className="form-group">
									<input
										className="form-control form-control-lg"
										type="text"
										name="username"
										placeholder="Your Name"
										onChange={handleChange}
										value={values.username || ''}
									/>
								</fieldset>
								<fieldset className="form-group">
									<textarea
										className="form-control form-control-lg"
										name="bio"
										rows="8"
										placeholder="Short bio about you"
										onChange={handleChange}
										value={values.bio || ''}
									></textarea>
								</fieldset>
								<fieldset className="form-group">
									<input
										className="form-control form-control-lg"
										type="text"
										name="email"
										placeholder="Email"
										onChange={handleChange}
										value={values.email || ''}
									/>
								</fieldset>
								<fieldset className="form-group">
									<input
										className="form-control form-control-lg"
										type="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										value={values.password || ''}
									/>
								</fieldset>
								<button
									type="submit"
									className="btn btn-lg btn-primary pull-xs-right"
								>
									Update Settings
								</button>
							</fieldset>
						</form>
						<button className="btn btn-outline-danger" onClick={handleLogout}>
							Or click here to logout.
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
