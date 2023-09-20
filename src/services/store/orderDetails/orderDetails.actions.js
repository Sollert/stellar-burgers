import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendOrderRequest } from '../../../utils/api'
import { getCookie } from '../../../utils/cookie'

export const createOrder = createAsyncThunk('createOrder', async ids => {
	try {
		const token = getCookie('token')
		const res = await sendOrderRequest(ids, token)
		return res.order
	} catch (err) {
		console.log(err)
	}
})
