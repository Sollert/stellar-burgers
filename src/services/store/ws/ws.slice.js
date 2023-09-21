import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	wsConnected: false,
	orders: {
		orders: [],
		total: 0,
		totalToday: 0,
	},
}

const wsSlice = createSlice({
	name: 'ws',
	initialState,
	reducers: {
		connectionSuccess: {
			reducer: state => {
				state.wsConnected = true
			},
		},
		connectionClosed: {
			reducer: state => {
				state.wsConnected = false
			},
		},
		connectionError: {
			reducer: state => {
				state.wsConnected = false
			},
		},
		getOrders: {
			reducer: (state, action) => {
				state.orders = action.payload
			},
		},
	},
})

export const wsStart = createAction('WS_AUTH_START')
export const wsClose = createAction('WS_AUTH_CLOSE')

export const {
	connectionSuccess,
	connectionClosed,
	connectionError,
	getOrders,
} = wsSlice.actions

export default wsSlice.reducer
