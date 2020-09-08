import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';

import Home from './pages/home/home';
import About from './pages/about/about';
import TermsOfService from './pages/termsofservice/termsofservice';
import Privacy from './pages/privacy/privacy';
import Help from './pages/help/help';
import AccountPresigned from './pages/account-presigned/account-presigned';
import Search from './pages/search/search';

import AccountRecover from './pages/help/help-pages/account-recover/account-recover';

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
						<Route exact path="/about/privacy" component={Privacy} />
						<Route exact path="/help" component={Help} />

						<Route exact path="/account" component={AccountPresigned} />
						<Route exact path="/stores" component={Search} />

						<Route exact path="/help/recover" component={AccountRecover} />

						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;
