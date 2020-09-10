const user = (state = {}, action) => {
	switch(action.type){
		case 'SIGNIN':
			return {
				type: 'login',
				...action.payload
			};
		case 'SIGNUP':
			return {
				type: 'register',
				...action.payload
			};
		case 'ACCOUNT':
			return {
				...action.payload
			};
		default:
			return state;
	}
}

export default user;
