import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as ingredientsReducer } from './ingredients/ingredients.slice'
import { reducer as orderDetailsReducer } from './orderDetails/orderDetails.slice'
import { reducer as userReducer } from './user/user.slice'

const rootReducer = combineReducers({
	cart: cartReducer,
	ingredients: ingredientsReducer,
	orderDetails: orderDetailsReducer,
	user: userReducer,
})

export const store = configureStore({
	devTools: true,
	reducer: rootReducer,
})
