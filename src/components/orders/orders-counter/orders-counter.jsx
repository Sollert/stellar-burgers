import clsx from 'clsx'

import styles from './orders-counter.module.css'

export default function OrdersCounter({ title, number }) {
	return (
		<section>
			<h2 className={clsx('text', 'text_type_main-medium')}>{title}</h2>
			<span className={clsx(styles['count'], 'text', 'text_type_digits-large')}>
				{number.toLocaleString()}
			</span>
		</section>
	)
}
