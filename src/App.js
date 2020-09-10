import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';

import Home from './pages/home/home';
import About from './pages/about/about';
import TermsOfService from './pages/termsofservice/termsofservice';
import Privacy from './pages/privacy/privacy';
import Help from './pages/help/help';
import AccountPresigned from './pages/account-presigned/account-presigned';
import Search from './pages/search/search';
import Profile from './pages/profile/profile';

import AccountRecover from './pages/help/help-pages/account-recover/account-recover';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: null,
			isLogged: false
		}

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(userdata){
		this.setState({
			user: userdata,
			isLogged: true
		})
	}

	logout(userdata){
		this.setState({
			user: null,
			isLogged: false
		})
	}

	render() {
		return (
			<div className="container-main">
				<Navbar isLogged={this.state.isLogged} />

				<div className="content">
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/about/termsofservice" component={TermsOfService} />
						<Route exact path="/about/privacy" component={Privacy} />
						
						<Route exact path="/help" >
							<Help isLogged={this.state.isLogged} />
						</Route>

						<Route exact path="/account">
							{
								this.state.user ? <Profile user={this.state.user} logoutHandler={this.logout} /> : <AccountPresigned loginHandler={this.login} />
							}
						</Route>

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
