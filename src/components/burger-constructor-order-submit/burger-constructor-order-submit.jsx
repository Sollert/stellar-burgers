import { useDispatch, useSelector } from 'react-redux'

import {
	CurrencyIcon,
	Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

import { actions as cartActions } from '../../services/store/cart/cart.slice'
import { createOrder } from '../../services/store/orderDetails/orderDetails.actions'

import styles from './burger-constructor-order-submit.module.css'

const BurgerConstructorOrderSubmit = () => {
	const dispatch = useDispatch()
	const totalPrice = useSelector(store => store.cart.totalPrice)
	const ids = useSelector(store => [
		store.cart.bun?._id,
		...store.cart.toppings.map(item => item._id),
	])

	const handleCreateOrder = () => {
		dispatch(createOrder(ids))
			.then(dispatch(cartActions.resetCart()))
			.catch(error => console.log(error))
	}

	return (
		<div className={`${styles.submit__container} mr-4`}>
			<p className={styles.price__container}>
				<span className='text text_type_digits-medium'>{totalPrice}</span>
				<CurrencyIcon type='primary' />
			</p>
			<Button
				htmlType='button'
				type='primary'
				size='large'
				onClick={handleCreateOrder}
			>
				Оформить заказ
			</Button>
		</div>
	)
}

BurgerConstructorOrderSubmit.propType = {
	handleCreateOrder: PropTypes.func.isRequired,
}

export default BurgerConstructorOrderSubmit
