import React, { useEffect } from 'react';
import useArticles from '../../hooks/useArticles';
import useForm from '../../hooks/useForm';
import ErrorMessage from '../../components/common/ErrorMessage';

function Editor() {
	const { createArticle, errors, isError, resetError } = useArticles();
	const { handleChange, values, handleResetForm } = useForm();

	useEffect(() => {
		handleResetForm();
		resetError();
		// eslint-disable-next-line
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			...values,
			tagList: [],
		};
		createArticle(data);
	};

	return (
		<div className="editor-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-10 offset-md-1 col-xs-12">
						{isError && <ErrorMessage errors={errors} />}
						<form onSubmit={handleSubmit}>
							<fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Article Title"
										name="title"
										onChange={handleChange}
										value={values.title || ''}
									/>
								</fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="What's this article about?"
										name="description"
										onChange={handleChange}
										value={values.description || ''}
									/>
								</fieldset>
								<fieldset className="form-group">
									<textarea
										className="form-control"
										rows="8"
										placeholder="Write your article (in markdown)"
										name="body"
										onChange={handleChange}
										value={values.body || ''}
									></textarea>
								</fieldset>
								<fieldset className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Enter tags"
									/>
									<div className="tag-list"></div>
								</fieldset>
								<button
									className="btn btn-lg pull-xs-right btn-primary"
									type="submit"
								>
									Publish Article
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Editor;
