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
			user: null
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
			<div className="content-container center">
				{
					signup ? <SignUp /> : <SignIn loginHandler={this.props.loginHandler} />
				}

				<button onClick={ this.switch } className="register-signin">
					{
						signup ? "Sign In" : "Register"
					}
				</button>

				<Link to="/help/recover" className="recover-account">
					<button className="register-signin">
						Recover Account
					</button>
				</Link>
			</div>
		)
	}
}

export default AccountPresigned;
