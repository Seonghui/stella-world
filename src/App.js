import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Home, Auth, Editor, Profile, Settings, Article } from './pages';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					{/* TODO: Nested route를 컴포넌트로 만들기 */}
					<Route path="/articles/:limit/:offset" component={Home} />
					<Route path="/feed/:limit/:offset" component={Home} />
					<Route path="/tag/:tag/:limit/:offset" component={Home} />
					<Route path="/login" component={Auth} />
					<Route path="/register" component={Auth} />
					<Route path="/editor/:slug" component={Editor} />
					<Route path="/editor" component={Editor} />
					<Route path="/article/:slug" component={Article} />
					<Route path="/settings" component={Settings} />
					<Route path="/@:username" component={Profile} />
					<Route path="/@:username/favorites" component={Profile} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
