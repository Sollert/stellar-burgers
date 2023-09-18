import {
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import HeaderLink from '../header-link/header-link'
import HeaderNavigation from '../header-navigation/header-navigation'

import styles from './app-header.module.css'
import { NavLink } from 'react-router-dom'
import HeaderLinkText from '../header-link/header-link'

const AppHeader = () => {
	return (
		<header className={`${styles.header} text text_type_main-default`}>
			<div className={styles.content}>
				<HeaderNavigation />
				<Logo />
				<div className={`${styles.profile} pt-4 pb-4 pl-5 pr-5`}>
					<NavLink to='/profile' className={styles.link}>
						{({ isActive }) => (
							<>
								<ProfileIcon type={isActive ? 'primary' : 'secondary'} />
								<HeaderLinkText isActive={isActive} text={'Личный кабинет'} />
							</>
						)}
					</NavLink>
				</div>
			</div>
		</header>
	)
}

export default AppHeader
