import { Outlet } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'

import styles from './profile.module.css'
import clsx from 'clsx'

export default function Profile() {
	return (
		<main className={styles.main}>
			<div className={clsx(styles.container, 'ml-5')}>
				<Navbar />
				<Outlet />
			</div>
		</main>
	)
}
