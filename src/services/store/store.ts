import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {reducer as cartReducer} from './cart/cart.slice'
import {reducer as ingredientsReducer} from './ingredients/ingredients.slice'
import {reducer as orderDetailsReducer} from './orderDetails/orderDetails.slice'
import {reducer as userReducer} from './user/user.slice'

import {socketMiddleware} from './ws/ws.middleware'
import {userAuthWsConfig, wsConfig} from '../../utils/config/config'
import wsSlice from './ws/ws.slice'
import userAuthWsSlice from './userAuthWs/userAuthWs.slice'

const rootReducer = combineReducers({
  cart: cartReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  user: userReducer,
  ws: wsSlice,
  userAuthWs: userAuthWsSlice,
})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      socketMiddleware('wss://norma.nomoreparties.space/orders/all', wsConfig),
      socketMiddleware(
        'wss://norma.nomoreparties.space/orders',
        userAuthWsConfig,
        true
      )
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;