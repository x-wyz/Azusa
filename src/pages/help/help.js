import React from 'react';
import './help.css';

import Contact from '../../icons/help_contact.svg';
import Recover from '../../icons/help_recover.svg';
import FAQ from '../../icons/help_faq.svg';
import TOS from '../../icons/help_tos.svg';
import Refund from '../../icons/help_refund.svg';

import HelpTopic from '../../components/help-topic/help-topic';

function Help(){
	return (
		<div className="help-container">
			<h2 className="help-header">Need Assistance?</h2>
			<HelpTopic name="Contact Us" link="/help/contact" ico={Contact} />
			<HelpTopic name="FAQ" link="/help/faq" ico={FAQ}/>
			<HelpTopic name="Terms of Service" link="/about/termsofservice" ico={TOS}/>
			<HelpTopic name="Recover Account" link="/help/recover" ico={Recover}/>
			<HelpTopic name="Refund" link="/help/refund" ico={Refund}/>
		</div>
	)
}

export default Help;