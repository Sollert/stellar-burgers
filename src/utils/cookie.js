export const setCookie = (name, value, options = {}) => {
	const { expires, path, domain, secure } = options

	let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

	if (expires instanceof Date) {
		cookie += '; expires=' + expires.toUTCString()
	}

	if (path) {
		cookie += '; path=' + path
	}

	if (domain) {
		cookie += '; domain=' + domain
	}

	if (secure) {
		cookie += '; secure'
	}

	document.cookie = cookie
}

export const getCookie = name => {
	const encodedName = encodeURIComponent(name)
	const cookies = document.cookie.split(';').map(cookie => cookie.trim())

	for (const cookie of cookies) {
		if (cookie.startsWith(encodedName + '=')) {
			const encodedValue = cookie.substring(encodedName.length + 1)
			return decodeURIComponent(encodedValue)
		}
	}

	return undefined
}
