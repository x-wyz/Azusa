import React from 'react';
import './help.css';

import HelpTopic from '../../components/help-topic/help-topic';

function Help(){
	return (
		<React.Fragment>
			<div className="help-image">
				<img src="#" />
			</div>
			<div className="help-container">
				<HelpTopic name="Terms of Service" link="/about/termsofservice"/>
				<HelpTopic name="FAQ" link="/help/faq"/>
				<HelpTopic name="Recover Account" link="/help/recover"/>
				<HelpTopic name="Contact Us" link="/help/contact"/>
				<HelpTopic name="Refund" link="/help/refund"/>
			</div>
		</React.Fragment>
	)
}

export default Help;