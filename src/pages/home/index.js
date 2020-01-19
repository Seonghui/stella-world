import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import ArticleList from '../../components/article/ArticleList';
import useArticles from '../../hooks/useArticles';
import Pagination from '../../components/common/Pagination';
import useAuth from '../../hooks/useAuth';

function Home({ match }) {
	const { articlesCount, offset } = useArticles();
	const { isLogin } = useAuth();
	const { type } = match.params;
	const isGlobalFeed = !type || type === 'articles' ? true : false;

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
								{isLogin && (
									<li className="nav-item">
										<Link
											to="/feed/10/0"
											className={`nav-link${isGlobalFeed ? '' : ' active'}`}
										>
											Your Feed
										</Link>
									</li>
								)}
								<li className="nav-item">
									<Link
										to="/articles/10/0"
										className={`nav-link${isGlobalFeed ? ' active' : ''}`}
									>
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
