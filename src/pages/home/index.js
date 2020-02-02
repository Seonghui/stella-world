import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import ArticleList from '../../components/article/ArticleList';
import useArticles from '../../hooks/useArticles';
import Pagination from '../../components/common/Pagination';
import useAuth from '../../hooks/useAuth';

function Home({ match }) {
	const { articlesCount, limit } = useArticles();
	const { isLogin } = useAuth();
	const { type, tag } = match.params;
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
											to="/feed/10/1"
											className={`nav-link${isGlobalFeed ? '' : ' active'}`}
										>
											Your Feed
										</Link>
									</li>
								)}
								<li className="nav-item">
									<Link
										to="/articles/10/1"
										className={`nav-link${isGlobalFeed ? ' active' : ''}`}
									>
										Global Feed
									</Link>
								</li>
								{tag && (
									<li className="nav-item">
										<Link to={`/tag/${tag}/10/1`} className="nav-link active">
											<i className="ion-pound"></i> {tag}
										</Link>
									</li>
								)}
							</ul>
						</div>
						<ArticleList />
						<Pagination count={articlesCount} limit={limit} />
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
