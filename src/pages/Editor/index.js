import React, { useEffect, useState } from 'react';
import useArticles from '../../hooks/useArticles';
import useForm from '../../hooks/useForm';
import ErrorMessage from '../../components/common/ErrorMessage';
import TagList from '../../components/Editor/TagList';
import TagListForm from '../../components/Editor/TagListForm';

function Editor({ history, match }) {
	const {
		createArticle,
		errors,
		isError,
		resetError,
		getArticle,
		article,
		updateArticle,
	} = useArticles();
	const { title, description, body, tagList } = article;
	const { slug } = match.params;
	const { handleChange, values, handleResetForm, setInitialValue } = useForm({
		title: title || '',
		description: description || '',
		body: body || '',
	});
	const [tags, setTags] = useState([]);

	useEffect(() => {
		handleResetForm();
		resetError();

		if (slug) {
			getArticle({ slug });
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (slug) {
			setInitialValue({
				title,
				description,
				body,
			});
			setTags(tagList);
		}
		// eslint-disable-next-line
	}, [article]);

	const handleKeyDown = tag => {
		setTags(tags.concat(tag));
	};

	const handleRemoveTagItem = tag => {
		const newTags = tags.filter(item => {
			return item !== tag;
		});
		setTags(newTags);
	};

	const onSuccess = data => {
		history.push(`/article/${data.article.slug}`);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			...values,
			tagList: tags,
		};
		if (slug) {
			updateArticle({ article: data, slug }, onSuccess);
		} else {
			createArticle(data, onSuccess);
		}
	};

	return (
		<div className="editor-page">
			<div className="container page">
				<div className="row">
					<div className="col-md-10 offset-md-1 col-xs-12">
						{isError && <ErrorMessage errors={errors} />}
						<form
							onSubmit={handleSubmit}
							onKeyDown={e => e.keyCode === 13 && e.preventDefault()}
						>
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
									<TagListForm handleKeyDown={handleKeyDown} />
									<TagList
										tags={tags}
										handleRemoveTagItem={handleRemoveTagItem}
									/>
								</fieldset>
								<button
									className="btn btn-lg pull-xs-right btn-primary"
									type="submit"
								>
									{slug ? 'Update' : 'Publish'} Article
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
