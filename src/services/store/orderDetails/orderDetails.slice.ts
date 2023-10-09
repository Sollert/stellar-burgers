import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {createOrder} from './orderDetails.actions'
import {InitialState, OrderDetailsData} from "./orderDetails.types";

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  order: null,
  modalVisible: false,
}

const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState: initialState,
  reducers: {
    closeModal: (state) => {
      state.modalVisible = false
      state.order = null
    },
  },
  extraReducers: builder => {
    builder.addCase(createOrder.pending, state => {
      state.isLoading = true
      state.modalVisible = true
    })
    builder.addCase(createOrder.fulfilled, (state, action: PayloadAction<OrderDetailsData>) => {
      state.isLoading = false
      state.order = action.payload
    })
    builder.addCase(createOrder.rejected, state => {
      state.isLoading = true
      state.isError = true
    })
  },
})

export const {actions, reducer} = orderDetailsSlice
