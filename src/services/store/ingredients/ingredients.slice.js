import { createSlice } from '@reduxjs/toolkit'
import { getIngredients } from './ingredients.actions'

const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState: {
		isLoading: false,
		isError: false,
		ingredients: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getIngredients.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getIngredients.fulfilled, (state, action) => {
			state.isLoading = false
			state.ingredients = action.payload
		})
		builder.addCase(getIngredients.rejected, state => {
			state.isLoading = true
			state.isError = true
		})
	},
})

export const { actions, reducer } = ingredientsSlice
