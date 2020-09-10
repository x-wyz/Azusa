const recover = (state = {}, action) => {
	switch(action.type) {
		case 'RECOVER':
			return {
				email: action.payload.email
			}
		default:
			return state;
	}
}

export default recover;
