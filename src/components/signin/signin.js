import React, { Component } from 'react';
import './signin.css';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.update = this.update.bind(this);
	}

	update(event){
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	render(){
		const {email, password} = this.state;

		return (
			<div>
				<h2>Sign In</h2>
				<form>
					<label className="labels" htmlFor="signin-email">Email</label>
					<input type="email" onChange={this.update} id="signin-email" value={email} />
					<label className="labels" htmlFor="signin-password">Password</label>
					<input type="password" onChange={this.update} id="signin-password" value={password} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default SignIn;