import React, { Component } from 'react';
import './account-presigned.css';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

import { Link } from 'react-router-dom';

class AccountPresigned extends Component {
	constructor(props){
		super(props);

		this.state = {
			signup: false,
		}

		this.switch = this.switch.bind(this);
	}

	switch(){
		this.setState({
			signup: !this.state.signup
		})
	}

	render() {
		const { signup } = this.state;

		return (
			<div className="account-form">
				{
					signup ? <SignUp /> : <SignIn />
				}

				<button onClick={ this.switch } className="register-signin">
					{
						signup ? "Sign In" : "Register"
					}
				</button>

				<Link to="/help/recover" className="recover-account">Recover Account</Link>
			</div>
		)
	}
}

export default AccountPresigned;
