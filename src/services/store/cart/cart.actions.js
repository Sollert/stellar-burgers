import { actions as cartActions } from './cart.slice'

export const sortToppings = (dragIndex, dropIndex) => (dispatch, getState) => {
	const toppings = [...getState().cart.toppings]
	toppings.splice(dropIndex, 0, toppings.splice(dragIndex, 1)[0])

	dispatch(cartActions.sortIngredients(toppings))
}
