import { getCookie } from './cookie'
import { saveTokens } from './utils'

const BASE_URL = 'https://norma.nomoreparties.space/api'

const getIngredientsDataUrl = `${BASE_URL}/ingredients`
const createOrderUrl = `${BASE_URL}/orders`
const registerUserUrl = `${BASE_URL}/auth/register`
const sendResetTokenUrl = `${BASE_URL}/password-reset`
const resetPasswordUrl = `${BASE_URL}/password-reset/reset`
const loginUserUrl = `${BASE_URL}/auth/login`
const getUserInfoUrl = `${BASE_URL}/auth/user`
const logoutUserUrl = `${BASE_URL}/auth/logout`
const refreshTokenUrl = `${BASE_URL}/auth/token`
const patchUserInfoUrl = `${BASE_URL}/auth/user`

const checkResponse = async res => {
	return res.ok ? await res.json() : Promise.reject(await res.json())
}

const sendRequest = (url, method, headers, body = null) => {
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

export const sendOrderRequest = (ids, token) => {
	const body = JSON.stringify({
		ingredients: ids,
	})
	return sendRequest(
		createOrderUrl,
		'POST',
		{
			'Content-Type': 'application/json',
			Authorization: token,
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
	return fetchWithRefresh(getUserInfoUrl, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	})
}

export const patchUserInfoRequest = async body => {
	const accessToken = getCookie('token')
	return fetchWithRefresh(patchUserInfoUrl, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify(body),
	})
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

function refreshTokens() {
	const refreshToken = localStorage.getItem('refreshToken')
	return fetch(refreshTokenUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: refreshToken,
		}),
	})
		.then(res => res.json())
		.then(data => {
			if (!data.success) {
				return Promise.reject(data)
			}
			saveTokens(data)
			return data
		})
		.catch(err => console.log(err))
}

export async function fetchWithRefresh(url, options) {
	try {
		const res = await fetch(url, options)
		return await checkResponse(res)
	} catch (err) {
		if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
			const refreshData = await refreshTokens()
			options.headers = {
				...options.headers,
				authorization: refreshData.accessToken,
			}
			const res = await fetch(url, options)
			return res
		} else {
			return Promise.reject(err)
		}
	}
}
