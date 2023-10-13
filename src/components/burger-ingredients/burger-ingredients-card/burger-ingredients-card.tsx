import {useDrag} from 'react-dnd'
import {Counter, CurrencyIcon,} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-ingredients-card.module.css'
import {Link, useLocation} from 'react-router-dom'
import {useAppSelector} from "../../../services/hooks/hooks";
import {BurgerIngredientsCardProps, CartState, IngredientData} from '../../../services/types/types';

const BurgerIngredientsCard = ({item}: BurgerIngredientsCardProps) => {
  const location = useLocation()
  const cart = useAppSelector(store => store.cart)
  const [, dragRef] = useDrag(
    {
      type: 'ingredient',
      item: item,
    },
    [item]
  )

  const findIngredientInCart = (cart: CartState, ingredient: IngredientData) => {
    if (ingredient.type === 'bun') {
      return [ingredient]
    } else {
      return cart['toppings'].filter(item => ingredient._id === item._id)
    }
  }

  const isIngredientInCart = (cart: CartState, ingredient: IngredientData) => {
    if (ingredient.type === 'bun') {
      return cart['bun']?._id === ingredient._id
    } else {
      return cart['toppings'].find(item => ingredient._id === item._id)
    }
  }

  return (
    <li className={styles.card} ref={dragRef}>
      <Link
        to={`/ingredients/${item._id}`}
        state={{background: location}}
        className={styles.link}
      >
        {isIngredientInCart(cart, item) && (
          <Counter
            count={findIngredientInCart(cart, item).length}
            size='default'
          />
        )}
        <img className={'mb-2'} src={item.image} alt={item.name}/>
        <p className={styles.card__priceContainer}>
          <span className={'text_type_digits-default'}>{item.price}</span>
          <CurrencyIcon type='primary'/>
        </p>
        <h4 className={'text text_type_main-default'}>{item.name}</h4>
      </Link>
    </li>
  )
}

export default BurgerIngredientsCard
