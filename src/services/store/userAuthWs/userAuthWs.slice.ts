import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {InitialState, OrdersObject} from "./userAuthWs.types";

const initialState: InitialState = {
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
    userAuthConnectionSuccess: state => {
      state.wsConnected = true
    },
    userAuthConnectionClosed: state => {
      state.wsConnected = false
    },
    userAuthConnectionError: state => {
      state.wsConnected = false
    },
    userAuthGetOrders: (state, action: PayloadAction<OrdersObject>) => {
      state.orders = action.payload
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
