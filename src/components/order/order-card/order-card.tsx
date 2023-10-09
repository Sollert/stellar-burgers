import {useMemo} from 'react'
import clsx from 'clsx'

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientIcon from '../../ingredient/ingredient-icon/ingedient-icon'

import {formatOrderNumber, getOrderStatus, getTimeStampString,} from '../../../utils/utils'

import styles from './order-card.module.css'
import {useAppSelector} from "../../../services/hooks/hooks";
import {OrderCardProps} from "./order-card.types";

export default function OrderCard({order, isUser}: OrderCardProps) {
  const ingredients = useAppSelector(store => store.ingredients.ingredients)

  const {name, number, ingredients: ingredientIds, createdAt, status} = order
  const orderStatus = getOrderStatus(status)

  const orderNumber = useMemo(() => {
    return `#${formatOrderNumber(number)}`
  }, [number])

  const {images, totalPrice} = useMemo(() => {
    const imagesUrls: string[] = []
    let price = 0

    ingredientIds.forEach((id) => {
      const ingredient = ingredients.find(item => item._id === id)
      if (ingredient) {
        if (imagesUrls.length < 6) {
          imagesUrls.push(ingredient.image_mobile)
        }

        if (ingredient.type === 'bun') {
          price += ingredient.price * 2
        } else {
          price += ingredient.price
        }
      }
    })

    return {
      images: imagesUrls,
      totalPrice: price,
    }
  }, [ingredients, ingredientIds])

  const count = useMemo(() => {
    return ingredientIds.length - 6
  }, [ingredientIds.length])

  const orderTime = getTimeStampString(createdAt)

  return (
    <article className={clsx(styles['order-card'], 'p-6', 'mb-4', 'mr-2')}>
      <div className={styles.orderId}>
				<span className={clsx('text', 'text_type_digits-default', 'mb-6')}>
					{orderNumber}
				</span>
        <span
          className={clsx(
            'text',
            'text_type_main-default',
            'text_color_inactive'
          )}
        >
					{orderTime}
				</span>
      </div>

      <p
        className={clsx(
          'text',
          'text_type_main-medium',
          isUser ? 'mb-2' : 'mb-6'
        )}
      >
        {name}
      </p>
      {isUser && (
        <p
          className={clsx(
            'text',
            'text_type_main-default',
            'mb-6',
            orderStatus === 'Выполнен' && styles.order_done
          )}
        >
          {orderStatus}
        </p>
      )}

      <div className={styles.info}>
        <ul className={styles['list']}>
          {images.map((url, index) => (
            <li key={index} className={styles['list-item']}>
              <IngredientIcon imageUrl={url} index={index} count={count}/>
            </li>
          ))}
        </ul>

        <div className={styles.price}>
					<span className={clsx('text', 'text_type_digits-default')}>
						{totalPrice}
					</span>
          <CurrencyIcon type={'secondary'}/>
        </div>
      </div>
    </article>
  )
}
