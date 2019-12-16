import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home';
import Auth from './pages/Auth';
import useAuth from './hooks/useAuth';

function App() {
	const { isLogin } = useAuth();
	return (
		<div className="App">
			<Router>
				<Header isLogin={isLogin} />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/login">
						<Auth />
					</Route>
					<Route path="/register">
						<Auth />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
