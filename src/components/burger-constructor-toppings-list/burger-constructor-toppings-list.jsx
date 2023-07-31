import { useSelector } from 'react-redux'
import BurgerConstructorTopping from '../burger-constructor-topping/burger-constructor-topping'

export const BurgerConstructorToppingsList = () => {
	const cart = useSelector(store => store.cart)

	return cart['toppings'].map((item, index) => (
		<BurgerConstructorTopping key={item.uid} ingredient={item} index={index} />
	))
}

export default BurgerConstructorToppingsList
