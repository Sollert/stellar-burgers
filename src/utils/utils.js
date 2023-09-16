import { setCookie } from './cookie'

export function saveTokens(data) {
	localStorage.setItem('refreshToken', data.refreshToken)
	const accessToken = data.accessToken.split('Bearer ')[1]

	if (accessToken) {
		setCookie('token', accessToken, { path: '/' })
	}
}
