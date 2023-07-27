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
				return {
					...state,
					bun: action.payload,
					totalPrice: state.bun
						? state.totalPrice -
						  state['bun'].price * 2 +
						  action.payload.price * 2
						: state.totalPrice + action.payload.price * 2,
				}
			},
			prepare: value => {
				return { payload: { ...value, uid: uuidv4() } }
			},
		},
		addTopping: {
			reducer: (state, action) => {
				return {
					...state,
					toppings: [...state.toppings, action.payload],
					totalPrice: state.totalPrice + action.payload.price,
				}
			},
			prepare: value => {
				return { payload: { ...value, uid: uuidv4() } }
			},
		},
		resetCart: {
			reducer: (state, action) => {
				return {
					...state,
					bun: null,
					toppings: [],
					totalPrice: 0,
				}
			},
		},
		deleteIngredient: {
			reducer: (state, action) => {
				if (action.payload.type === 'bun') {
					return {
						...state,
						bun: null,
					}
				} else {
					return {
						...state,
						toppings: state.toppings.filter(
							item => item.uid !== action.payload.uid
						),
						totalPrice: state.totalPrice - action.payload.price,
					}
				}
			},
		},
	},
})

export const { actions, reducer } = cartSlice
