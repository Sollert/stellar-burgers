import {getCookie} from '../cookie'
import {saveTokens} from '../utils'
import {
  CREATE_ORDER_ENDPOINT,
  GET_INGREDIENTS_ENDPOINT,
  GET_USER_ENDPOINT,
  LOGIN_USER_ENDPOINT,
  LOGOUT_USER_ENDPOINT,
  REFRESH_TOKEN_URL_ENDPOINT,
  REGISTER_USER_ENDPOINT,
  RESET_PASSWORD_ENDPOINT,
  SEND_RESET_TOKEN_ENDPOINT,
  UPDATE_USER_INFO_ENDPOINT
} from "./endpoints";
import {GET, PATCH, POST} from "./methods";
import {headers, headersWithAuth} from "./headers";

const checkResponse = async res => {
  return res.ok
    ? await res.json()
    : Promise.reject(await res.json())
}

const sendRequest = async (url, options) => {
  const res = await fetch(url, options)
  return await checkResponse(res)
}

async function refreshTokens() {
  const refreshToken = localStorage.getItem('refreshToken')

  const res = await sendRequest(REFRESH_TOKEN_URL_ENDPOINT, {
    method: POST,
    headers: headers,
    body: JSON.stringify({
      token: refreshToken,
    }),
  })

  saveTokens(res)
  return res
}

export async function sendRequestWithRefresh(url, options) {
  try {
    return await sendRequest(url, options)
  } catch (err) {
    if (err.message === 'jwt expired' || err.message === 'jwt malformed') {
      const refreshData = await refreshTokens()
      options.headers = {
        ...options.headers,
        Authorization: refreshData.accessToken,
      }
      return await fetch(url, options)
    } else {
      return Promise.reject(err)
    }
  }
}

export const getIngredientsData = () => {
  return sendRequest(GET_INGREDIENTS_ENDPOINT, {
    method: GET,
    headers
  })
}

export const sendOrderRequest = (ids, token) => {
  return sendRequest(CREATE_ORDER_ENDPOINT,
    {
      method: POST,
      headers: headersWithAuth(token),
      body: JSON.stringify({
        ingredients: ids
      })
    })
}

export const registerUserRequest = inputData => {
  return sendRequest(REGISTER_USER_ENDPOINT,
    {
      method: POST,
      headers,
      body: JSON.stringify(inputData)
    })
}

export const sendResetTokenRequest = inputData => {
  return sendRequest(
    SEND_RESET_TOKEN_ENDPOINT,
    {
      method: POST,
      headers,
      body: JSON.stringify(inputData)
    }
  )
}

export const resetPasswordRequest = inputData => {
  return sendRequest(
    RESET_PASSWORD_ENDPOINT,
    {
      method: POST,
      headers,
      body: JSON.stringify(inputData)
    }
  )
}

export const loginUserRequest = inputData => {
  return sendRequest(
    LOGIN_USER_ENDPOINT,
    {
      method: POST,
      headers,
      body: JSON.stringify(inputData)
    }
  )
}

export const getUserInfoRequest = () => {
  const accessToken = getCookie('token')
  return sendRequestWithRefresh(
    GET_USER_ENDPOINT,
    {
      method: GET,
      headers: headersWithAuth(`Bearer ${accessToken}`)
    })
}

export const patchUserInfoRequest = async body => {
  const accessToken = getCookie('token')
  return sendRequestWithRefresh(UPDATE_USER_INFO_ENDPOINT, {
    method: PATCH,
    headers: headersWithAuth(`Bearer ${accessToken}`),
    body: JSON.stringify(body),
  })
}

export const logoutUserRequest = () => {
  const token = localStorage.getItem('refreshToken')
  return sendRequest(
    LOGOUT_USER_ENDPOINT,
    POST,
    {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    JSON.stringify({token})
  )
}
