import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/home';
import Auth from './pages/Auth';

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/login">
						<Auth />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
