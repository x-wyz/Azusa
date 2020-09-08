import React from 'react';

import './help-topic.css';

import { Link } from 'react-router-dom';

function HelpTopic({ name, link, ico }){
	return (
		<Link to={link} className="help-topic">
			<img src={ico} className="help-icon" alt="" />
			<p>{name}</p>
		</Link>
	)
}

export default HelpTopic;