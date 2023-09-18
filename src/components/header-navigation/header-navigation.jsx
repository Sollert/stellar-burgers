import {
	BurgerIcon,
	ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { NavLink } from 'react-router-dom'

import HeaderLinkText from '../header-link/header-link'

import styles from './header-navigation.module.css'

const HeaderNavigation = () => {
	return (
		<nav className={styles.header__navigation}>
			<ul className={styles.header__list}>
				<li className={'pt-4 pb-4 pl-5 pr-5'}>
					<NavLink to='/' className={styles.link}>
						{({ isActive }) => (
							<>
								<BurgerIcon type={isActive ? 'primary' : 'secondary'} />
								<HeaderLinkText isActive={isActive} text={'Конструктор'} />
							</>
						)}
					</NavLink>
				</li>
				<li className={'pt-4 pb-4 pl-5 pr-5'}>
					<NavLink to='/orders' className={styles.link}>
						{({ isActive }) => (
							<>
								<ListIcon type={isActive ? 'primary' : 'secondary'} />
								<HeaderLinkText isActive={isActive} text={'Лента заказов'} />
							</>
						)}
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNavigation
