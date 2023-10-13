import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getIngredients} from './ingredients.actions'
import {IngredientData, IngredientsInitialState} from "../../types/types";

const initialState: IngredientsInitialState = {
  isLoading: false,
  isError: false,
  ingredients: [],
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getIngredients.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getIngredients.fulfilled, (state, action: PayloadAction<IngredientData[]>) => {
      state.isLoading = false
      state.ingredients = action.payload
    })
    builder.addCase(getIngredients.rejected, state => {
      state.isLoading = true
      state.isError = true
    })
  },
})

export const {actions, reducer} = ingredientsSlice
