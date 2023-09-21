import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendOrderRequest } from '../../../utils/api/api'
import { getCookie } from '../../../utils/cookie'

export const createOrder = createAsyncThunk('createOrder', async ids => {
	const token = `Bearer ${getCookie('token')}`
	const res = await sendOrderRequest(ids, token)
	return res.order
})
