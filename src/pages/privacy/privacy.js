import React from 'react';

import './privacy.css';

import { Link } from 'react-router-dom';

function Privacy(){
	return (
		<div className="privacy-container">
			<h2>Our Privacy Policy</h2>
			<p className="center-text privacy-text">Integer vehicula efficitur mauris. Suspendisse potenti. Maecenas vel 
			scelerisque nisi, et mattis enim. Quisque at libero sagittis, dignissim leo sed, blandit mauris. 
			Maecenas pellentesque libero id libero pretium, eget elementum turpis rutrum. Sed et iaculis augue. 
			roin quis auctor lorem. Donec cursus nunc in lorem interdum, quis fermentum tortor ultrices. 
			Proin est urna, placerat posuere feugiat vitae, ornare sit amet ex. Proin fringilla, enim sed 
			pellentesque imperdiet, metus eros pharetra elit, et dictum nisl lorem ac eros.</p>
			<div className="to-about-container">
				<Link to="/about" className="to-about">&lt;&lt; About</Link>
			</div>
		</div>
	)
}

export default Privacy;