import clsx from 'clsx'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {wsClose, wsStart} from '../../../services/store/ws/ws.slice.js'

import OrdersNumbers from '../orders-numbers/orders-numbers.jsx'
import OrdersList from '../orders-list/orders-list.jsx'

import styles from './orders-feed.module.css'
import OrdersCounter from '../orders-counter/orders-counter.jsx'
import Loader from '../../loader/loader.jsx'

export default function OrdersFeed() {
  const dispatch = useDispatch()
  const orders = useSelector(store => store.ws.orders.orders)
  const total = useSelector(store => store.ws.orders.total)
  const totalToday = useSelector(store => store.ws.orders.totalToday)

  useEffect(() => {
    dispatch(wsStart())

    return () => {
      dispatch(wsClose())
    }
  }, [dispatch])

  if (orders.length === 0 || !total || !totalToday) return <Loader/>

  return (
    <div className={styles['container']}>
      <section
        aria-label='Лента заказов'
        className={clsx(styles['feed'], 'custom-scroll')}
      >
        <OrdersList orders={orders} to='feed'/>
      </section>

      <section aria-label='Статистика заказов' className={styles['stats']}>
        <section className={styles['orders-board']}>
          <OrdersNumbers doneOrders title={'Готовы:'}/>
          <OrdersNumbers title={'В работе:'}/>
        </section>
        <OrdersCounter title={'Выполнено за всё время:'} number={total}/>
        <OrdersCounter title={'Выполнено за сегодня:'} number={totalToday}/>
      </section>
    </div>
  )
}
