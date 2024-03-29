import {useMemo} from 'react'
import clsx from 'clsx'

import {formatOrderNumber} from '../../../utils/utils'

import styles from './orders-numbers.module.css'
import {useAppSelector} from "../../../services/hooks/hooks";
import {OrderDetailsData, OrdersNumbersProps} from "../../../services/types/types"


export default function OrdersNumbers({doneOrders = false, title}: OrdersNumbersProps) {
  const orders: OrderDetailsData[] = useAppSelector(store => store.ws.orders.orders)

  const ordersNumbers = useMemo(() => {
    return orders
      ? orders
        .filter(order =>
          doneOrders ? order.status === 'done' : order.status !== 'done'
        )
        .map(order => order.number)
        .slice(0, 10)
      : null
  }, [orders, doneOrders])

  return (
    <section className={styles['container']}>
      <h2 className={clsx('text', 'text_type_main-medium', 'mb-6')}>{title}</h2>
      <ul className={clsx(styles['numbers-list'])}>
        {ordersNumbers &&
          ordersNumbers.map((num, index) => (
            <li
              key={index}
              className={clsx(
                styles['order-number'],
                doneOrders && styles['order-number_done'],
                'text',
                'text_type_digits-default',
                'mb-2'
              )}
            >
              {formatOrderNumber(num)}
            </li>
          ))}
      </ul>
    </section>
  )
}
