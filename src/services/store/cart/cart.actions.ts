import {actions as cartActions} from './cart.slice'
import {AppThunk} from "../store";

export const sortToppings = (dragIndex: number, dropIndex: number): AppThunk => (dispatch, getState) => {
  const toppings = [...getState().cart.toppings]
  toppings.splice(dropIndex, 0, toppings.splice(dragIndex, 1)[0])

  dispatch(cartActions.sortIngredients(toppings))
}
