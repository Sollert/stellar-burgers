import React from 'react'
import styles from './loader.module.css'
import clsx from 'clsx'

const Loader = () => {
	return (
		<div className={styles.load}>
			<div className={styles.hamburger}>
				<div className={styles['top-bun']}></div>
				<div className={styles.pickle}></div>
				<div className={styles.pickle}></div>
				<div className={styles.tomato}>
					<div></div>
				</div>
				<div className={styles.tomato}>
					<div></div>
				</div>
				<div className={styles.cheese}></div>
				<div className={styles.cheese}></div>
				<div className={styles.beef}></div>
				<div className={styles['bottom-bun']}></div>
			</div>
		</div>
	)
}

export default React.memo(Loader)
