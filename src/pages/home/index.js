/* eslint-disable */
import React, { useEffect } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import ArticleList from '../../components/common/ArticleList';
import useTags from '../../hooks/useTags';
import useArticles from '../../hooks/useArticles';

function Home() {
	const { getTags, tags } = useTags();
	const { getArticles, articles } = useArticles();

	useEffect(() => {
		getTags();
	}, [getTags]);

	useEffect(() => {
		getArticles();
	}, [getArticles]);

	return (
		<div className="home-page">
			<div className="banner">
				<div className="container">
					<h1 className="logo-font">conduit</h1>
					<p>A place to share your knowledge.</p>
				</div>
			</div>

			<div className="container page">
				<div className="row">
					<div className="col-md-9">
						<div className="feed-toggle">
							<ul className="nav nav-pills outline-active">
								<li className="nav-item">
									<a className="nav-link disabled" href="">
										Your Feed
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" href="">
										Global Feed
									</a>
								</li>
							</ul>
						</div>
						<ArticleList articles={articles} />
					</div>

					<div className="col-md-3">
						<Sidebar tags={tags} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
