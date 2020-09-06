import React, { Component } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

import Logo from '../../icons/logo.png';

class Navbar extends Component {
	render(){
		return (
			<div className="navigation-container">
				<div className="icon">
					<img className="company-logo" src={Logo} alt=" "/>
				</div>
				<div className="navigation">
					<div className="upper-section">
						<div className="nav-link-container">
							<Link to="/" className="nav-link">
								<p className="nav-img">H</p>
								<p className="nav-text">Home</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/stores" className="nav-link">
								<p className="nav-img">S</p>
								<p className="nav-text">Search</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/help" className="nav-link">
								<p className="nav-img">H</p>
								<p className="nav-text">Help</p>
							</Link>
						</div>
					</div>

					<div className="lower-section">
						<div className="nav-link-container">
							<Link to="/account" className="nav-link">
								<p className="nav-img">P</p>
								<p className="nav-text">Profile</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/about" className="nav-link">
								<p className="nav-img">A</p>
								<p className="nav-text">About</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;