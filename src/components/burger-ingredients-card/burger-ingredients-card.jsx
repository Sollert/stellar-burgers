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
		if (isIngredientInCart(cart, item)) {
			return cart['ids'].filter(cartItem => {
				return ingredient._id === cartItem
			})
		}
		return null
	}

	const isIngredientInCart = (cart, ingredient) => {
		return cart['ids'].find(cartItem => {
			return ingredient._id === cartItem
		})
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
			{findIngredientInCart(cart, item) && (
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
