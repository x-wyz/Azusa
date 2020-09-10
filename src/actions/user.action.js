export const loginUser = (data) => ({
	type: "SIGNIN",
	payload: {
		email: data.email,
		password: data.password,
	}
})

export const registerUser = (data) => ({
	type: "SIGNUP",
	payload: {
		email: data.email,
		password: data.password,
		passwordConfirm: data.passwordConfirm,
		name: data.name
	}
})

export const getAccount = (data) => ({
	type: "ACCOUNT",
	payload: {
		uuid: data.id,
		store: store.store,
		email: data.email,
		name: data.name
	}
})
