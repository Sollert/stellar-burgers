import {useParams} from 'react-router-dom'

import styles from './ingredient-details.module.css'
import {useAppSelector} from "../../../services/hooks/hooks";

const IngredientDetails = () => {
  const {id} = useParams()
  const {ingredients} = useAppSelector(store => store.ingredients)

  const ingredient = ingredients.find(ingredient => ingredient._id === id)

  return (
    <div className={styles.details__container}>
      <img
        src={ingredient?.image_large}
        alt={ingredient?.name}
        className='mb-4'
      />
      <h3
        className={`${styles.details__title} text text_type_main-medium mb-8`}
      >
        {ingredient?.name}
      </h3>
      <ul className={`${styles.details__list} text text_color_inactive`}>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className='text_type_main-default'>Калории,ккал</span>
          {ingredient?.calories}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className='text_type_main-default'>Белки, г</span>
          {ingredient?.proteins}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className='text_type_main-default'>Жиры, г</span>
          {ingredient?.fat}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className='text_type_main-default'>Углеводы, г</span>
          {ingredient?.carbohydrates}
        </li>
      </ul>
    </div>
  )
}

export default IngredientDetails
