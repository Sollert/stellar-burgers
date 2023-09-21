import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	getUserInfoRequest,
	loginUserRequest,
	logoutUserRequest,
	patchUserInfoRequest,
	registerUserRequest,
} from '../../../utils/api'
import { saveTokens } from '../../../utils/utils'

export const registerUser = createAsyncThunk('registerUser', async data => {
	try {
		const res = await registerUserRequest(data)
		const { user, accessToken, refreshToken } = res
		saveTokens({ accessToken, refreshToken })
		return user
	} catch (err) {
		console.log(err)
	}
})

export const loginUser = createAsyncThunk('loginUser', async data => {
	try {
		const res = await loginUserRequest(data)
		if (res.success) {
			const { user, accessToken, refreshToken } = res
			saveTokens({ accessToken, refreshToken })
			return user
		}
	} catch (err) {
		console.log(err)
	}
})

export const getUserInfo = createAsyncThunk('getUserInfo', async () => {
	try {
		const res = await getUserInfoRequest()
		if (res.success) {
			return res.user
		}
	} catch (err) {
		console.lot(err)
	}
})

export const logoutUser = createAsyncThunk('logoutUser', async () => {
	try {
		const res = await logoutUserRequest()
		return res
	} catch (err) {
		console.log(err)
	}
})

export const patchUserInfo = createAsyncThunk('patchUserInfo', async body => {
	try {
		const res = await patchUserInfoRequest(body)
		return res
	} catch (err) {
		console.log(err)
	}
})
