import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			passwordconfirm: '',

		}
		this.update = this.update.bind(this);
		this.confirm = this.confirm.bind(this);
	}

	update(event){
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	confirm(event){
		this.setState({
			passwordconfirm: event.target.value
		})
	}

	render(){
		const {email, password, passwordconfirm} = this.state;

		return (
			<div>
				<h2>Register</h2>
				<form>
					<label className="labels" htmlFor="signin-email">Email</label>
					<input type="email" onChange={this.update} id="signup-email" value={email} required />
					<label className="labels" htmlFor="signin-password">Password</label>
					<input type="password" onChange={this.update} id="signup-password" value={password} required />
					<label className="labels" htmlFor="signin-password">Confirm Password</label>
					<input type="password" onChange={this.confirm} id="signup-password-confirm" value={passwordconfirm} required />
					<input type="checkbox" value="tos" required />
					<label className="tos-label" htmlFor="tos">I have read the terms of service.</label>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default SignUp;