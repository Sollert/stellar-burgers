import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InitialState, OrdersObject} from "./ws.types";

const initialState: InitialState = {
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
    connectionSuccess: state => {
      state.wsConnected = true
    },
    connectionClosed: state => {
      state.wsConnected = false
    },
    connectionError: state => {
      state.wsConnected = false
    },
    getOrders: (state, action: PayloadAction<OrdersObject>) => {
      state.orders = action.payload
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
