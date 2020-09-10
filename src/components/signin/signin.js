import React, { Component } from 'react';
import './signin.css';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			message: ''
		}
		this.update = this.update.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	update(event){
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	submitHandler(event){
		event.preventDefault();
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(response => {
			if (response.uuid) {
				this.props.loginHandler(response);
			}
			else {
				this.setState({
					message: response
				})
			}
		})
		.catch(err => {
			console.log("Error signing in")
		})

		this.setState({
			password: ''
		})
	}

	render(){
		const {email, password} = this.state;

		return (
			<div>
				<h2>Sign In</h2>
				{
					this.state.message ? <p className="incorrectLogin">{this.state.message}</p> : null
				}
				<form className="signin-form" onSubmit={this.submitHandler}>
					<label className="labels" htmlFor="signin-email">Email</label>
					<input className="formfield-input" type="email" onChange={this.update} id="signin-email" value={email} required />
					<label className="labels" htmlFor="signin-password">Password</label>
					<input className="formfield-input" type="password" onChange={this.update} id="signin-password" value={password} required />
					<input className="formfield-submit" type="submit" value="Login" />
				</form>
			</div>
		)
	}
}

export default SignIn;