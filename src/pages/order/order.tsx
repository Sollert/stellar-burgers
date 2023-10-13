import clsx from 'clsx'

import OrderInfo from '../../components/order/order-info/order-info'

import styles from './order.module.css'

export const Order = () => {
  return (
    <main className={clsx(styles['order-container'])}>
      <OrderInfo/>
    </main>
  )
}
