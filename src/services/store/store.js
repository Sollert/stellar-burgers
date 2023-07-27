import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as ingredientsReducer } from './ingredients/ingredients.slice'
import { reducer as ingredientDetailsReducer } from './ingredientDetails/ingredientDetails.slice'
import { reducer as orderDetailsReducer } from './orderDetails/orderDetails.slice'

const rootReducer = combineReducers({
	cart: cartReducer,
	ingredients: ingredientsReducer,
	ingredientDetails: ingredientDetailsReducer,
	orderDetails: orderDetailsReducer,
})

export const store = configureStore({
	devTools: true,
	reducer: rootReducer,
})
