import { useLocation, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import OrderCard from '../order-card/order-card'

import styles from './orders-list.module.css'

export default function OrdersList({ orders, to, isUser = false }) {
	const location = useLocation()

	return (
		<ul className={styles['orders-list']}>
			{orders.map(order => (
				<li key={order._id}>
					<Link
						to={`/${to}/${order._id}`}
						state={{ background: location }}
						className={styles.link}
					>
						<OrderCard order={order} isUser={isUser} />
					</Link>
				</li>
			))}
		</ul>
	)
}

OrdersList.propTypes = {
	orders: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			igredients: PropTypes.arrayOf(PropTypes.string.isRequired),
			status: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			updatedAt: PropTypes.string,
			number: PropTypes.number.isRequired,
		})
	).isRequired,
	to: PropTypes.string.isRequired,
	isUser: PropTypes.bool,
}
