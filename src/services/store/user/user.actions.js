import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	getUserInfoRequest,
	loginUserRequest,
	registerUserRequest,
} from '../../../utils/api'
import { saveTokens } from '../../../utils/utils'

export const registerUser = createAsyncThunk('registerUser', async data => {
	try {
		const res = await registerUserRequest(data)
		return res
	} catch (err) {
		console.log(err)
	}
})

export const loginUser = createAsyncThunk('loginUser', async data => {
	try {
		const res = await loginUserRequest(data)
		const { user, accessToken, refreshToken } = res
		saveTokens({ accessToken, refreshToken })
		return user
	} catch (err) {
		console.log(err)
	}
})

export const getUserInfo = createAsyncThunk('getUserInfo', async () => {
	try {
		const res = await getUserInfoRequest()
		return res.user
	} catch (err) {
		console.lot(err)
	}
})
