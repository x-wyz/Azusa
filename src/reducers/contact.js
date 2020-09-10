const contact = (state = {}, action) => {
	switch(action.type) {
		case "CONTACT":
			return {
				email: action.payload.email,
				comment: action.payload.comment
			}
		default:
			return state;
	}
}

export default contact;
