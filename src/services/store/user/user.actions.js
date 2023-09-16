import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerUserRequest } from '../../../utils/api'

export const registerUser = createAsyncThunk('registerUser', async data => {
	try {
		const res = await registerUserRequest(data)
		return res
	} catch (err) {
		console.log(err)
	}
})
