import React from 'react';

import './help-topic.css';

import { Link } from 'react-router-dom';

function HelpTopic({ name, link }){
	return (
		<Link to={link} className="help-topic">
			<div>
				<p>{name}</p>
			</div>
		</Link>
	)
}

export default HelpTopic;