import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { createOrder } from '../../utils/api'
import { actions } from '../../services/store/cart/cart.slice'

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerConstructorToppingsList from '../burger-constructor-toppings-list/burger-constructor-toppings-list'
import BurgerConstructorOrderSubmit from '../burger-constructor-order-submit/burger-constructor-order-submit'

import styles from './burger-constructor.module.css'

const BurgerConstructor = ({ openModal, setOrderDetails }) => {
	const cart = useSelector(store => store.cart)
	const dispatch = useDispatch()

	const handleCreateOrder = () => {
		createOrder([cart.bun._id, ...cart.toppings.map(item => item._id)])
			.then(setOrderDetails)
			.then(openModal)
			.then(dispatch(actions.resetCart()))
			.catch(error => console.log(error))
	}

	return (
		<section className={styles.section__container}>
			<ul className={`${styles.ingredients__container}`}>
				<li className={'ml-10'}>
					{cart['bun'] ? (
						<ConstructorElement
							type='top'
							isLocked={true}
							text={`${cart['bun']?.name} (верх)`}
							price={cart['bun']?.price}
							thumbnail={cart['bun']?.image}
						/>
					) : (
						<div className={`${styles.bun__empty} ${styles.bun__empty_top}`}>
							<span
								className={`${styles.bun__emptyText} text text_type_main-default`}
							>
								Выбери булку
							</span>
						</div>
					)}
				</li>
				<li>
					<ul className={`${styles.toppings__container} custom-scroll`}>
						<BurgerConstructorToppingsList />
					</ul>
				</li>
				<li className={'ml-10'}>
					{cart['bun'] ? (
						<ConstructorElement
							type='bottom'
							isLocked={true}
							text={`${cart['bun']?.name} (низ)`}
							price={cart['bun']?.price}
							thumbnail={cart['bun']?.image}
						/>
					) : (
						<div className={`${styles.bun__empty} ${styles.bun__empty_bottom}`}>
							<span
								className={`${styles.bun__emptyText} text text_type_main-default`}
							>
								Выбери булку
							</span>
						</div>
					)}
				</li>
			</ul>
			{cart['bun'] ? (
				<BurgerConstructorOrderSubmit
					totalPrice={cart.totalPrice}
					handleCreateOrder={handleCreateOrder}
				/>
			) : null}
		</section>
	)
}

BurgerConstructor.propType = {
	openModal: PropTypes.func.isRequired,
	setOrderDetails: PropTypes.func.isRequired,
}

export default BurgerConstructor
