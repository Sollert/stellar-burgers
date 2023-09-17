import { createSlice } from '@reduxjs/toolkit'
import {
	registerUser,
	loginUser,
	getUserInfo,
	logoutUser,
} from './user.actions'

const userSlice = createSlice({
	name: 'ingredients',
	initialState: {
		isRequest: false,
		isError: false,
		isAuth: false,
		user: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(registerUser.pending, state => {
			state.isRequest = true
			state.isError = false
		})
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.isRequest = false
			state.isAuth = true
			state.user = action.payload
		})
		builder.addCase(registerUser.rejected, state => {
			state.isRequest = false
			state.isError = true
		})
		builder.addCase(loginUser.pending, state => {
			state.isRequest = true
			state.isError = false
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isRequest = false
			state.isAuth = true
			state.user = action.payload
		})
		builder.addCase(loginUser.rejected, state => {
			state.isRequest = false
			state.isError = true
			state.isAuth = false
			state.user = null
		})
		builder.addCase(getUserInfo.pending, state => {
			state.isRequest = true
			state.isError = false
		})
		builder.addCase(getUserInfo.fulfilled, (state, action) => {
			state.isRequest = false
			state.isAuth = true
			state.user = action.payload
		})
		builder.addCase(getUserInfo.rejected, state => {
			state.isRequest = false
			state.isError = true
		})
		builder.addCase(logoutUser.pending, state => {
			state.isRequest = true
			state.isError = false
		})
		builder.addCase(logoutUser.fulfilled, (state, action) => {
			state.isRequest = false
			state.isAuth = false
			state.user = null
		})
		builder.addCase(logoutUser.rejected, state => {
			state.isRequest = false
			state.isError = true
		})
	},
})

export const { actions, reducer } = userSlice
