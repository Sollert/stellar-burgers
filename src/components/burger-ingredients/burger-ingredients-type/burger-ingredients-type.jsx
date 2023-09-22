import {forwardRef} from 'react'

import BurgerIngredientsCardsList
  from '../burger-ingredients-cards-list/burger-ingredients-cards-list'


import styles from './burger-ingredients-type.module.css'

const BurgerIngredientsType = forwardRef(({type, config}, ref) => {
  return (
    <li>
      <h3
        className={`${styles.card__title} text text_type_main-medium`}
        ref={ref}
      >
        {config[type].title}
      </h3>
      <ul className={styles.type__list}>
        <BurgerIngredientsCardsList type={type}/>
      </ul>
    </li>
  )
})

export default BurgerIngredientsType
