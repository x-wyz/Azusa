import React, { Component } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

import Logo from '../../icons/logo.png';


import { faHome, faSearchDollar, faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
								<p className="nav-text">
									<FontAwesomeIcon className="nav-icon" icon={faHome} />
									<span className="label home-label">Home</span>
								</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/stores" className="nav-link">
								<p className="nav-text">
									<FontAwesomeIcon className="nav-icon" icon={faSearchDollar} />
									<span className="label label-search">Search</span>
								</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/help" className="nav-link">
								<p className="nav-text">
									<FontAwesomeIcon className="nav-icon" icon={faQuestion} />
									<span className="label label-help">Help</span>
								</p>
							</Link>
						</div>
					</div>

					<div className="lower-section">
						<div className="nav-link-container">
							<Link to="/account" className="nav-link">
								<p className="nav-text">
									<FontAwesomeIcon className="nav-icon" icon={faUser} />
								</p>
							</Link>
						</div>

						<div className="nav-link-container">
							<Link to="/about" className="nav-link">
								<p className="nav-text">About Us</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;