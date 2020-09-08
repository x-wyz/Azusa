import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './account-recover.css';

class AccountRecover extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: ''
		}

		this.update = this.update.bind(this);
	}

	update(event){
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	render(){
		const { email } = this.state;
		return (
			<div className="content-container center">
				<h2>Recover Account</h2>
				 <form className="recovery-form">
				 	<label for="recover-email" className="labels">Email</label>
				 	<input className="formfield-input" type="email" id="recover-email"/>
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
