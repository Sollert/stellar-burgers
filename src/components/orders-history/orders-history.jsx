import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

import {
	userAuthWsClose,
	userAuthWsStart,
} from '../../services/store/userAuthWs/userAuthWs.slice.js'

import OrdersList from '../orders-list/orders-list'

import styles from './orders-history.module.css'

const OrdersHistory = () => {
	const dispatch = useDispatch()
	const orders = useSelector(store => store.userAuthWs.orders.orders)

	useEffect(() => {
		dispatch(userAuthWsStart())
		return () => {
			dispatch(userAuthWsClose())
		}
	}, [dispatch])

	return (
		<section className={clsx(styles.container, 'custom-scroll')}>
			<OrdersList orders={orders} to='profile/orders' isUser />
		</section>
	)
}

export default OrdersHistory
