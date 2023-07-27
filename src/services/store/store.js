import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as ingredientsReducer } from './ingredients/ingredients.slice'
import { reducer as ingredientDetailsReducer } from './ingredientDetails/ingredientDetails.slice'

const rootReducer = combineReducers({
	cart: cartReducer,
	ingredients: ingredientsReducer,
	ingredientDetails: ingredientDetailsReducer,
})

export const store = configureStore({
	devTools: true,
	reducer: rootReducer,
})
