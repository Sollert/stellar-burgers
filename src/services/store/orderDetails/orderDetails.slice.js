import { createSlice } from '@reduxjs/toolkit'
import { createOrder } from './orderDetails.actions'

const orderDetailsSlice = createSlice({
	name: 'orderDetails',
	initialState: {
		isLoading: false,
		isError: false,
		order: {},
		modalVisible: false,
	},
	reducers: {
		closeModal: {
			reducer: state => {
				return {
					...state,
					modalVisible: false,
					order: {},
				}
			},
		},
	},
	extraReducers: builder => {
		builder.addCase(createOrder.pending, state => {
			state.isLoading = true
		})
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.isLoading = false
			state.order = action.payload
			state.modalVisible = true
		})
		builder.addCase(createOrder.rejected, state => {
			state.isLoading = true
			state.isError = true
		})
	},
})

export const { actions, reducer } = orderDetailsSlice
