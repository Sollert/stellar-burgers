import { createSlice } from '@reduxjs/toolkit'
import { createOrder } from './orderDetails.actions'

const orderDetailsSlice = createSlice({
	name: 'orderDetails',
	initialState: {
		isLoading: false,
		isError: false,
		order: null,
		modalVisible: false,
	},
	reducers: {
		closeModal: {
			reducer: state => {
				state.modalVisible = false
				state.order = {}
			},
		},
	},
	extraReducers: builder => {
		builder.addCase(createOrder.pending, state => {
			state.isLoading = true
			state.modalVisible = true
		})
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.isLoading = false
			state.order = action.payload
			state.modalVisible = true
			console.log(state.order)
		})
		builder.addCase(createOrder.rejected, state => {
			state.isLoading = true
			state.isError = true
		})
	},
})

export const { actions, reducer } = orderDetailsSlice
