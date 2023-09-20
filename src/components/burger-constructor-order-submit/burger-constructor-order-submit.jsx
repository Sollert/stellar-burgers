import { useDispatch, useSelector } from 'react-redux'

import {
	CurrencyIcon,
	Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

import { actions as cartActions } from '../../services/store/cart/cart.slice'
import { createOrder } from '../../services/store/orderDetails/orderDetails.actions'

import styles from './burger-constructor-order-submit.module.css'
import { useNavigate } from 'react-router-dom'

const BurgerConstructorOrderSubmit = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const userIsAuth = useSelector(store => store.user.isAuth)
	const totalPrice = useSelector(store => store.cart.totalPrice)
	const bun = useSelector(store => store.cart.bun)
	const toppings = useSelector(store => store.cart.toppings)

	const ids = [bun?._id, ...toppings.map(item => item._id)]

	const handleCreateOrder = () => {
		if (userIsAuth) {
			dispatch(createOrder(ids))
				.then(dispatch(cartActions.resetCart()))
				.catch(error => console.log(error))
		} else {
			navigate('/login')
		}
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
