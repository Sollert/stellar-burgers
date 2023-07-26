import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	bun: null,
	toppings: [],
	ids: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBun: (state, action) => {
			return {
				...state,
				bun: action.payload,
				ids: [
					...state.ids.filter(id => id !== state?.bun?._id),
					action.payload._id,
				],
				totalPrice: state.bun
					? state.totalPrice - state['bun'].price * 2 + action.payload.price * 2
					: state.totalPrice + action.payload.price * 2,
			}
		},
		addTopping: (state, action) => {
			return {
				...state,
				toppings: [...state.toppings, action.payload],
				ids: [...state.ids, action.payload._id],
				totalPrice: state.totalPrice + action.payload.price,
			}
		},
		resetCart: (state, action) => {
			return {
				...state,
				bun: null,
				toppings: [],
				ids: [],
				totalPrice: 0,
			}
		},
	},
})

export const { actions, reducer } = cartSlice
