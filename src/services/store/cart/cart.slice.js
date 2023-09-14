import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
	bun: null,
	toppings: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBun: {
			reducer: (state, action) => {
				state.totalPrice = state.bun
					? state.totalPrice - state.bun.price * 2 + action.payload.price * 2
					: state.totalPrice + action.payload.price * 2
				state.bun = action.payload
			},
			prepare: value => {
				return { payload: { ...value, uid: uuidv4() } }
			},
		},
		addTopping: {
			reducer: (state, action) => {
				state.totalPrice = state.totalPrice + action.payload.price
				state.toppings = [...state.toppings, action.payload]
			},
			prepare: value => {
				return { payload: { ...value, uid: uuidv4() } }
			},
		},
		resetCart: {
			reducer: (state, action) => {
				state.bun = null
				state.toppings = []
				state.totalPrice = 0
			},
		},
		sortIngredients: {
			reducer: (state, action) => {
				state.toppings = action.payload
			},
		},
		deleteIngredient: {
			reducer: (state, action) => {
				if (action.payload.type === 'bun') {
					state.totalPrice = state.totalPrice - action.payload.price
					state.bun = null
				} else {
					state.toppings = state.toppings.filter(
						item => item.uid !== action.payload.uid
					)
					state.totalPrice = state.totalPrice - action.payload.price
				}
			},
		},
	},
})

export const { actions, reducer } = cartSlice
