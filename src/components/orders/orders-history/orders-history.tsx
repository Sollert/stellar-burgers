import {useEffect} from 'react'
import clsx from 'clsx'

import {
  userAuthWsClose,
  userAuthWsStart,
} from '../../../services/store/userAuthWs/userAuthWs.slice.js'

import OrdersList from '../orders-list/orders-list'

import styles from './orders-history.module.css'
import Loader from '../../loader/loader'
import {useAppDispatch, useAppSelector} from "../../../services/hooks/hooks";

const OrdersHistory = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector(store => store.userAuthWs.orders.orders)

  useEffect(() => {
    dispatch(userAuthWsStart())
    return () => {
      dispatch(userAuthWsClose())
    }
  }, [dispatch])

  if (!orders) return <Loader/>

  return (
    <section className={clsx(styles.container, 'custom-scroll')}>
      <OrdersList orders={orders} to='profile/orders' isUser/>
    </section>
  )
}

export default OrdersHistory
