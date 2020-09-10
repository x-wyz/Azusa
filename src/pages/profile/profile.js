import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
	// constructor(props){
	// 	super(props);
	// }

	render() {
		return (
			<div className="content-container center">
				<h2>Profile</h2>
				<div className="pfinfo-container">
					<p className="profile-header">Name</p>
					<p className="profile-data">{`${this.props.user.name}`}</p>
				</div>
				<div className="pfinfo-container">
					<p className="profile-header">Email</p>
					<p className="profile-data">{`${this.props.user.email}`}</p>
				</div>
				<div className="pfinfo-container">
					<p className="profile-header">Identity</p>
					<p className="profile-data">{`${this.props.user.uuid}`}</p>
				</div>
				<div className="pfinfo-container">
					<p className="profile-header">Store</p>
					<p className="profile-data">{`Store: ${!this.props.user.store ? "N/A" : "Confirmed"}`}</p>
				</div>
				<button className="signout-btn" type="button" onClick={this.props.logoutHandler}>Sign Out</button>
			</div>
		)
	}
}

export default Profile;
