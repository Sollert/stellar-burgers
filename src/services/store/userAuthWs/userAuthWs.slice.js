import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
	wsConnected: false,
	orders: {
		orders: [],
		total: 0,
		totalToday: 0,
	},
}

const userAuthWsSlice = createSlice({
	name: 'userAuthWs',
	initialState,
	reducers: {
		userAuthConnectionSuccess: {
			reducer: state => {
				state.wsConnected = true
			},
		},
		userAuthConnectionClosed: {
			reducer: state => {
				state.wsConnected = false
			},
		},
		userAuthConnectionError: {
			reducer: state => {
				state.wsConnected = false
			},
		},
		userAuthGetOrders: {
			reducer: (state, action) => {
				state.orders = action.payload
			},
		},
	},
})

export const userAuthWsStart = createAction('WS_START')
export const userAuthWsClose = createAction('WS_CLOSE')

export const {
	userAuthConnectionSuccess,
	userAuthConnectionClosed,
	userAuthConnectionError,
	userAuthGetOrders,
} = userAuthWsSlice.actions

export default userAuthWsSlice.reducer
