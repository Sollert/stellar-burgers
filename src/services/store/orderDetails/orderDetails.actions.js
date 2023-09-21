import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendOrderRequest } from '../../../utils/api'
import { getCookie } from '../../../utils/cookie'

export const createOrder = createAsyncThunk('createOrder', async ids => {
	const token = `Bearer ${getCookie('token')}`
	const res = await sendOrderRequest(ids, token)
	const data = await res.json()
	return data.order
})
