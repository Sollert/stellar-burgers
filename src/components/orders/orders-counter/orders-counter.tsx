import clsx from 'clsx'

import styles from './orders-counter.module.css'
import {OrdersCounterProps} from "../../../services/types/types";

export default function OrdersCounter({title, number}: OrdersCounterProps) {
  return (
    <section>
      <h2 className={clsx('text', 'text_type_main-medium')}>{title}</h2>
      <span className={clsx(styles['count'], 'text', 'text_type_digits-large')}>
				{number.toLocaleString()}
			</span>
    </section>
  )
}
