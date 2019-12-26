import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import ArticleList from '../../components/common/ArticleList';
import useArticles from '../../hooks/useArticles';
import Pagination from '../../components/common/Pagination';

function Home() {
	const { articlesCount, offset } = useArticles();

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
									<Link to="/feed/10/1" className="nav-link">
										Your Feed
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/articles/10/0" className="nav-link">
										Global Feed
									</Link>
								</li>
							</ul>
						</div>
						<ArticleList />
						<Pagination count={articlesCount} offset={offset} />
					</div>

					<div className="col-md-3">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
