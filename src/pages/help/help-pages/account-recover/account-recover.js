import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './account-recover.css';

class AccountRecover extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			message: null,
			sent: false
		}

		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(event){
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		
		fetch('http://localhost:3001/recover', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email
			})
		})
		.then(response => response.json())
		.then(response => {
			if (response === "No email found associated with the selected email."){
				this.setState({
					message: response,
					sent: false
				})
			}
			else {
				this.setState({
					message: response,
					sent: true
				})
			}
		})
		.catch(err => console.log("Error sending recover email"))

		// Placing this here in case there is an error I still want the form to be reset.
		this.setState({
			email: ""
		})
	}

	render(){
		const { email } = this.state;
		return (
			<div className="content-container center">
				<h2>Recover Account</h2>
				{
					this.state.message ? <p className={`emailrecovery ${this.state.sent ? 'emailsent' : 'emailnotsent'}`}>{this.state.message}</p> : null
				}
				 <form className="recovery-form" onSubmit={this.handleSubmit}>
				 	<label htmlFor="recover-email" className="labels">Email</label>
				 	<input className="formfield-input" type="email" id="recover-email" onChange={this.update} value={email} required/>
				 	<input type="submit" className="formfield-submit" value="Recover Password" />
				 </form>
				 <Link to="/account">
				 	<button className="signin-signup">Sign In</button>
				 </Link>
			</div>
		)
	}

}

export default AccountRecover;
