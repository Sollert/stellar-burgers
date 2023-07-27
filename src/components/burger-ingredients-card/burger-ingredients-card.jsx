import { useSelector, useDispatch } from 'react-redux'
import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { ingredientPropType } from '../../utils/prop-types'

import styles from './burger-ingredients-card.module.css'
import { actions } from '../../services/store/cart/cart.slice'

const BurgerIngredientsCard = ({ item }) => {
	const cart = useSelector(store => store.cart)
	const dispatch = useDispatch()

	const findIngredientInCart = (cart, ingredient) => {
		if (ingredient.type === 'bun') {
			return '1'
		} else {
			return cart['toppings'].filter(item => ingredient._id === item._id)
		}
	}

	const isIngredientInCart = (cart, ingredient) => {
		if (ingredient.type === 'bun') {
			return cart['bun']?._id === ingredient._id
		} else {
			return cart['toppings'].find(item => ingredient._id === item._id)
		}
	}

	return (
		<li
			className={styles.card}
			onClick={() => {
				item.type === 'bun'
					? dispatch(actions.addBun(item))
					: dispatch(actions.addTopping(item))
			}}
		>
			{isIngredientInCart(cart, item) && (
				<Counter
					count={findIngredientInCart(cart, item).length}
					size='default'
				/>
			)}
			<img className={'mb-2'} src={item.image} alt={item.name} />
			<p className={styles.card__priceContainer}>
				<span className={'text_type_digits-default'}>{item.price}</span>
				<CurrencyIcon type='primary' />
			</p>
			<h4 className={'text text_type_main-default'}>{item.name}</h4>
		</li>
	)
}

BurgerIngredientsCard.propTypes = {
	item: ingredientPropType.isRequired,
}

export default BurgerIngredientsCard
