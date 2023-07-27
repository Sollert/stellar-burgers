import {
	ConstructorElement,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-constructor-toppings-list.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../services/store/cart/cart.slice'

export const BurgerConstructorToppingsList = () => {
	const dispatch = useDispatch()
	const cart = useSelector(store => store.cart)
	return cart['toppings'].map((item, index) => {
		return (
			<li key={index} className={styles.topping}>
				<DragIcon />
				<ConstructorElement
					text={item.name}
					price={item.price}
					thumbnail={item.image}
					handleClose={() => dispatch(actions.deleteIngredient(item))}
				/>
			</li>
		)
	})
}

export default BurgerConstructorToppingsList
