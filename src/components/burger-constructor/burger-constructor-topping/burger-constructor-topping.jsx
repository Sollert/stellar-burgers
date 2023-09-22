import {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {useDrag, useDrop} from 'react-dnd'

import {sortToppings} from '../../../services/store/cart/cart.actions'
import {actions as cartActions} from '../../../services/store/cart/cart.slice'

import {ConstructorElement, DragIcon,} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-constructor-topping.module.css'

export const BurgerConstructorTopping = ({ingredient, index}) => {
  const dispatch = useDispatch()
  const constructorElementRef = useRef(null)

  const [, drop] = useDrop({
    accept: 'constructor',
    drop(item) {
      const dragIndex = item.index
      const dropIndex = index
      if (dragIndex === dropIndex) return
      dispatch(sortToppings(dragIndex, dropIndex))
    },
  })

  const [, drag] = useDrag({
    type: 'constructor',
    item: {ingredient, index},
  })

  drop(drag(constructorElementRef))

  return (
    <li className={styles.topping} ref={constructorElementRef}>
      <DragIcon/>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(cartActions.deleteIngredient(ingredient))}
      />
    </li>
  )
}

export default BurgerConstructorTopping
