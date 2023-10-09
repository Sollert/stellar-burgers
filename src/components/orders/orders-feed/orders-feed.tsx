import clsx from 'clsx'
import {useEffect} from 'react'

import {wsClose, wsStart} from '../../../services/store/ws/ws.slice.js'

import OrdersNumbers from '../orders-numbers/orders-numbers'
import OrdersList from '../orders-list/orders-list'

import styles from './orders-feed.module.css'
import OrdersCounter from '../orders-counter/orders-counter'
import Loader from '../../loader/loader'
import {useAppDispatch, useAppSelector} from "../../../services/hooks/hooks";

export default function OrdersFeed() {
  const dispatch = useAppDispatch()
  const orders = useAppSelector(store => store.ws.orders.orders)
  const total = useAppSelector(store => store.ws.orders.total)
  const totalToday = useAppSelector(store => store.ws.orders.totalToday)

  useEffect(() => {
    dispatch(wsStart())

    return () => {
      dispatch(wsClose())
    }
  }, [dispatch])

  if (!orders || !total || !totalToday) return <Loader/>

  return (
    <div className={styles['container']}>
      <section
        aria-label='Лента заказов'
        className={clsx(styles['feed'], 'custom-scroll')}
      >
        <OrdersList orders={orders} to='feed' isUser={false}/>
      </section>

      <section aria-label='Статистика заказов' className={styles['stats']}>
        <section className={styles['orders-board']}>
          <OrdersNumbers doneOrders title={'Готовы:'}/>
          <OrdersNumbers title={'В работе:'} doneOrders={false}/>
        </section>
        <OrdersCounter title={'Выполнено за всё время:'} number={total}/>
        <OrdersCounter title={'Выполнено за сегодня:'} number={totalToday}/>
      </section>
    </div>
  )
}
