export const recoverAction = (data) => ({
	type: "RECOVER",
	payload: {
		email: data.email
	}
})