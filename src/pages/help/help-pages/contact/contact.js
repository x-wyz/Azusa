import React, { Component } from 'react';

import './contact.css';

class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			textarea: "",
			message: ""
		}
		this.update = this.update.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	update(event) {
		this.setState({
			[event.target.type]: event.target.value
		})
	}

	submitHandler(event){
		event.preventDefault();

		fetch('http://localhost:3001/contact', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				comment: this.state.textarea
			})
		})
		.then(response => response.json())
		.then(response => {
			if (response) {
				this.setState({
					message: response
				})
			}
		})
		.catch(err => {
			this.setState({
				message: "There was an error sending your message"
			})
		})

		this.setState({
			email: "",
			textarea: ""
		})

	}

	render(){
		const { email, textarea, message } = this.state;
		return (
			<div className="content-container center">
				<h2 className="contact-header">Contact Us</h2>
				{
					message ? <p className="contact-message">{message}</p> : null
				}
				<form onSubmit={this.submitHandler} id="contact-form">
					<label htmlFor="contact-email" className="labels">Email</label>
					<input type="email" value={email} onChange={this.update} id="contact-email" className="formfield-input" required/>
					<label htmlFor="contact-comment" className="labels">Questions / Comments</label>
					<textarea value={textarea} type="textarea" onChange={this.update} className="comment-textarea" rows="8"></textarea>
					<input type="submit" value="Submit" className="submit-contact-form" />
				</form>
			</div>
		)
	}
}

export default Contact;
