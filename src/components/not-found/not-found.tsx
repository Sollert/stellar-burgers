import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './not-found.module.css'

export default function NotFound() {
	return (
		<div className={styles.container}>
			<h1 className='text text_type_main-large mb-6'>
				Кажется, ты заблудился...
			</h1>
			<Link
				to='/'
				className={clsx(styles.link, 'text', 'text_type_main-medium')}
			>
				Вернуться на главную
			</Link>
		</div>
	)
}
