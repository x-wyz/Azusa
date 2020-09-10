import contact from './contact';
import recover from './recover';
import search from './search';
import user from './user';

import { combineReducers } from 'redux';

const rootreducer = combineReducers({
	recover, search, user, contact, 
});

export default rootreducer;
