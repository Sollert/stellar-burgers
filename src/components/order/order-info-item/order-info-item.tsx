import clsx from 'clsx'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientIcon from '../../ingredient/ingredient-icon/ingedient-icon'

import styles from './order-info-item.module.css'
import {OrderInfoItemProps} from "../../../services/types/types";

export default function OrderInfoItem({ingredient}: OrderInfoItemProps) {
  const {name, image_mobile: imageUrl, price, count} = ingredient

  return (
    <>
      <div className='mr-4'>
        <IngredientIcon imageUrl={imageUrl} position='relative'/>
      </div>
      <p className={clsx('text', 'text_type_main-default', 'mr-4')}>{name}</p>
      <div className={styles.currency}>
        <p className={clsx('text', 'text_type_digits-default', 'mr-4')}>
          {`${count} x ${price}`}
        </p>
        <CurrencyIcon type={'primary'}/>
      </div>
    </>
  )
}
