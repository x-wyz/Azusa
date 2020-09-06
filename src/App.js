import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';

import About from './pages/about/about';
import TermsOfService from './pages/termsofservice/termsofservice';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<div className="container-main">
				<Navbar />

				<div className="content">
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/about/termsofservice" component={TermsOfService} />
						{
							//<Route exact path="/about/privacy" component={About} />
						}
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;
