import { createSlice } from '@reduxjs/toolkit'
import registerUser from './user.actions'

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
	},
})

export const { actions, reducer } = userSlice
