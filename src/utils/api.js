import { getCookie } from './cookie'

const getIngredientsDataUrl =
	'https://norma.nomoreparties.space/api/ingredients'

const createOrderUrl = 'https://norma.nomoreparties.space/api/orders'

const registerUserUrl = 'https://norma.nomoreparties.space/api/auth/register'

const sendResetTokenUrl = 'https://norma.nomoreparties.space/api/password-reset'

const resetPasswordUrl =
	'https://norma.nomoreparties.space/api/password-reset/reset'

const loginUserUrl = 'https://norma.nomoreparties.space/api/auth/login'

const getUserInfoUrl = 'https://norma.nomoreparties.space/api/auth/user'

const logoutUserUrl = 'https://norma.nomoreparties.space/api/auth/logout'

const checkResponse = res => {
	return res.ok ? res.json() : Promise.reject(res)
}

const sendRequest = async (url, method, headers, body = null) => {
	return fetch(url, {
		method: method,
		headers: headers,
		body: body,
	}).then(checkResponse)
}

export const getIngredientsData = () => {
	return sendRequest(getIngredientsDataUrl, 'GET', {
		'Content-Type': 'application/json',
	})
}

export const sendOrderRequest = ids => {
	const body = JSON.stringify({
		ingredients: ids,
	})
	return sendRequest(
		createOrderUrl,
		'POST',
		{
			'Content-Type': 'application/json',
		},
		body
	)
}

export const registerUserRequest = data => {
	const body = JSON.stringify(data)
	return sendRequest(
		registerUserUrl,
		'POST',
		{
			'Content-Type': 'application/json',
		},
		body
	)
}

export const sendResetTokenRequest = data => {
	const body = JSON.stringify(data)
	return sendRequest(
		sendResetTokenUrl,
		'POST',
		{
			'Content-Type': 'application/json',
		},
		body
	)
}

export const resetPasswordRequest = data => {
	const body = JSON.stringify(data)
	return sendRequest(
		resetPasswordUrl,
		'POST',
		{
			'Content-Type': 'application/json',
		},
		body
	)
}

export const loginUserRequest = data => {
	const body = JSON.stringify(data)
	return sendRequest(
		loginUserUrl,
		'POST',
		{
			'Content-Type': 'application/json',
		},
		body
	)
}

export const getUserInfoRequest = () => {
	const accessToken = getCookie('token')
	if (accessToken) {
		return sendRequest(getUserInfoUrl, 'GET', {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		})
	}
}

export const logoutUserRequest = () => {
	const token = localStorage.getItem('refreshToken')
	return sendRequest(
		logoutUserUrl,
		'POST',
		{
			'Content-Type': 'application/json',
			Authorization: token,
		},
		JSON.stringify({ token })
	)
}
