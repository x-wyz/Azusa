import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: '',
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
		const {email, password, passwordconfirm, text} = this.state;

		return (
			<div>
				<h2>Sign Up</h2>
				<form className="signup-form">
					<label className="labels" htmlFor="signup-username">Identity (Name / Username / Nickname)</label>
					<input className="formfield-input" type="text" onChange={this.update} id="signup-username" value={text} required />
					<label className="labels" htmlFor="signup-email">Email</label>
					<input className="formfield-input" type="email" onChange={this.update} id="signup-email" value={email} required />
					<label className="labels" htmlFor="signup-password">Password</label>
					<input className="formfield-input" type="password" onChange={this.update} id="signup-password" value={password} required />
					<label className="labels" htmlFor="signup-password">Confirm Password</label>
					<input className="formfield-input" type="password" onChange={this.confirm} id="signup-password-confirm" value={passwordconfirm} required />
					<div className="tos-confirm-container">
						<input type="checkbox" value="tos" required />
						<label className="formfield-input" className="tos-label" htmlFor="tos">I have read the terms of service.</label>
					</div>
					<input className="formfield-submit" type="submit" value="Register" />
				</form>
			</div>
		)
	}
}

export default SignUp;