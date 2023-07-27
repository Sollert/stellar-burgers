import { createSlice } from '@reduxjs/toolkit'

const ingredientDetailsSlice = createSlice({
	name: 'ingredientDetails',
	initialState: {
		ingredient: {},
		modalVisible: false,
	},
	reducers: {
		openModal: {
			reducer: (state, action) => {
				return {
					...state,
					ingredient: action.payload,
					modalVisible: true,
				}
			},
		},
		closeModal: {
			reducer: (state, action) => {
				return {
					...state,
					ingredient: {},
					modalVisible: false,
				}
			},
		},
	},
})

export const { actions, reducer } = ingredientDetailsSlice
