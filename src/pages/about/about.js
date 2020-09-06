import React from 'react';

import './about.css';

import { Link } from 'react-router-dom';

function About(){
	return (
		<div className="about-container">
			<h3> Our Mission </h3>
			<p className="mission-text about-paragraph">Maecenas et tellus sit amet diam mollis placerat. Suspendisse a vehicula est.</p>

			<h2>About Us</h2>
			<p className="about-paragraph">Proin vehicula augue in libero consectetur, ut vestibulum mauris auctor. 
			Sed et augue ac velit dapibus semper et quis lectus. Etiam id libero in diam faucibus malesuada. 
			Vestibulum sed libero ac nisl fermentum semper nec eget risus. Proin ac nisi in augue dignissim 
			aliquet. Mauris hendrerit, est vitae blandit bibendum, leo eros bibendum tellus, ut sagittis enim
			 neque vel odio. Sed nec nibh malesuada, sodales odio in, convallis lectus.</p>

			<h3>Connect With Us!</h3>
			<div className="connect-container">
				<Link to="/na" className="connect-button">Facebook</Link>
				<Link to="/na" className="connect-button">Twitter</Link>
				<Link to="/na" className="connect-button">Instagram</Link>
			</div>

			<h3>Our Policies</h3>
			<div className="terms-policies-container">
				<Link to="/about/termsofservice" className="connect-button top-margin">Terms and Conditions</Link>
				<Link to="/about/privacy" className="connect-button top-margin">Privacy Policy</Link>
			</div>
		</div>
	)
}

export default About;