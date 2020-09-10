export const contactAction = (data) => ({
	type: "CONTACT",
	payload: {
		email: data.email,
		comment: data.comment
	}
})