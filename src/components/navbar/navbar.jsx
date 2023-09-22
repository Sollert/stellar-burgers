import {NavLink, useLocation} from 'react-router-dom'
import clsx from 'clsx'

import styles from './navbar.module.css'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../../services/store/user/user.actions'
import {deleteCookie} from '../../utils/cookie/cookie'

export default function Navbar() {
  const dispatch = useDispatch()
  const location = useLocation()

  const onClickHandler = () => {
    dispatch(logoutUser())
      .then(res => deleteCookie('token', {path: '/'}))
      .catch(err => console.log(err))
  }

  return (
    <aside className={styles.aside}>
      <nav className='mb-20'>
        <ul className={styles.list}>
          <li className={styles['list__item']}>
            <NavLink to='/profile' end className={styles.link}>
              {({isActive}) => (
                <span
                  className={clsx(
                    'text',
                    'text_type_main-medium',
                    !isActive && 'text_color_inactive'
                  )}
                >
									Профиль
								</span>
              )}
            </NavLink>
          </li>
          <li className={styles['list__item']}>
            <NavLink to='/profile/orders' className={styles.link}>
              {({isActive}) => (
                <span
                  className={clsx(
                    'text',
                    'text_type_main-medium',
                    !isActive && 'text_color_inactive'
                  )}
                >
									История заказов
								</span>
              )}
            </NavLink>
          </li>
          <li
            className={clsx(
              styles['list__item'],
              'text',
              'text_type_main-medium',
              'text_color_inactive'
            )}
          >
            <button className={styles['exit-btn']} onClick={onClickHandler}>
              Выход
            </button>
          </li>
        </ul>
      </nav>
      {location.pathname === '/profile' && (
        <span
          className={clsx(
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
					В этом разделе вы можете изменить свои персональные данные
				</span>
      )}
      {location.pathname === '/profile/orders' && (
        <span
          className={clsx(
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
					В этом разделе вы можете просмотреть свою историю заказов
				</span>
      )}
    </aside>
  )
}
