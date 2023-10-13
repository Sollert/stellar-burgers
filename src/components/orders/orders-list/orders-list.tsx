import {Link, useLocation} from 'react-router-dom'

import OrderCard from '../../order/order-card/order-card'

import styles from './orders-list.module.css'
import {LocationState, OrdersListProps} from "../../../services/types/types";

export default function OrdersList({orders, to, isUser = false}: OrdersListProps) {
  const location: LocationState = useLocation()

  return (
    <ul className={styles['orders-list']}>
      {orders.map(order => (
        <li key={order._id}>
          <Link
            to={`/${to}/${order._id}`}
            state={{background: location}}
            className={styles.link}
          >
            <OrderCard order={order} isUser={isUser}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}
