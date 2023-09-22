import {useEffect} from 'react'
import {useMatch, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import clsx from 'clsx'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import OrderInfoItem from '../order-info-item/order-info-item'

import {wsClose, wsStart} from '../../../services/store/ws/ws.slice.js'

import {
	userAuthWsClose,
	userAuthWsStart,
} from '../../../services/store/userAuthWs/userAuthWs.slice.js'

import {formatOrderNumber, getOrderStatus, getTimeStampString,} from '../../../utils/utils'

import styles from './order-info.module.css'
import Loader from '../../loader/loader'

export default function OrderInfo({isModal = false}) {
  const dispatch = useDispatch()
  const {id} = useParams()
  const match = useMatch(`/feed/${id}`)
  const ingredients = useSelector(store => store.ingredients.ingredients)
  const orders = useSelector(store => {
    return match ? store.ws.orders.orders : store.userAuthWs.orders.orders
  })

  useEffect(() => {
    match ? dispatch(wsStart()) : dispatch(userAuthWsStart())

    return () => {
      match ? dispatch(wsClose()) : dispatch(userAuthWsClose())
    }
  }, [dispatch, match])

  const order = orders.find(order => order._id === id)

  if (!order) return <Loader/>
  const {name, number, status, ingredients: ingredientsIds, createdAt} = order
  const orderNumber = `#${formatOrderNumber(number)}`
  const orderStatus = getOrderStatus(status)

  const orderIngredients = ingredientsIds.reduce((acc, current) => {
    const ingredient = ingredients.find(item => item._id === current)
    if (!acc[current]) {
      ingredient.type === 'bun'
        ? (acc[current] = {...ingredient, count: 2})
        : (acc[current] = {...ingredient, count: 1})
    } else {
      ingredient.type === 'bun'
        ? (acc[current].count = 2)
        : acc[current].count++
    }

    return acc
  }, {})

  const ingredientsList = Object.values(orderIngredients)
  const totalPrice = ingredientsList.reduce(
    (acc, ingredient) => acc + ingredient.price * ingredient.count,
    0
  )
  const orderTime = getTimeStampString(createdAt)

  return (
    <article className={clsx(styles.container)}>
      <p
        className={clsx(
          !isModal && styles['order-number'],
          'text',
          'text_type_digits-default',
          'mb-10'
        )}
      >
        {orderNumber}
      </p>
      <h2 className={clsx('text', 'text_type_main-medium', 'mb-3')}>{name}</h2>
      <p
        className={clsx(
          orderStatus === 'Выполнен' && styles['order-status_done'],
          'text',
          'text_type_main-default',
          'mb-15'
        )}
      >
        {orderStatus}
      </p>
      <h3 className={clsx('text', 'text_type_main-medium', 'mb-6')}>Состав:</h3>
      <div className='mb-10'>
        <ul className={clsx(styles['ingredients-list'], 'custom-scroll')}>
          {ingredientsList.map((item, index) => (
            <li key={index} className={clsx(styles.ingredient, 'mr-6')}>
              <OrderInfoItem ingredient={item}/>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['time-price']}>
        <p
          className={clsx(
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
          {orderTime}
        </p>
        <div className={styles.price}>
					<span className={clsx('text', 'text_type_digits-default', 'mr-2')}>
						{totalPrice}
					</span>
          <CurrencyIcon/>
        </div>
      </div>
    </article>
  )
}
