import React from 'react';
import './help.css';

import HelpTopic from '../../components/help-topic/help-topic';

function Help(){
	return (
		<div className="help-container">
			<div className="help-image">
				<img src="#" />
			</div>
			<HelpTopic name="Contact Us" link="/help/contact"/>
			<HelpTopic name="FAQ" link="/help/faq"/>
			<HelpTopic name="Terms of Service" link="/about/termsofservice"/>
			<HelpTopic name="Recover Account" link="/help/recover"/>
			<HelpTopic name="Refund" link="/help/refund"/>
		</div>
	)
}

export default Help;