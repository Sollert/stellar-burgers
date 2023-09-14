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
				state.ingredient = action.payload
				state.modalVisible = true
			},
		},
		closeModal: {
			reducer: (state, action) => {
				state.ingredient = {}
				state.modalVisible = false
			},
		},
	},
})

export const { actions, reducer } = ingredientDetailsSlice
