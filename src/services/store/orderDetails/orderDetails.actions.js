import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendOrderRequest } from '../../../utils/api'

export const createOrder = createAsyncThunk('createOrder', async ids => {
	try {
		const res = await sendOrderRequest(ids)
		return res.order
	} catch (err) {
		console.log(err)
	}
})
