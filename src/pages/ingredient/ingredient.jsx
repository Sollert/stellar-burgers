import IngredientDetails from '../../components/ingredient/ingredient-details/ingredient-details'
import styles from './ingredient.module.css'

const Ingredient = () => {
  return (
    <div className='mt-15 p-15'>
      <h1 className={`${styles.title} text_type_main-large`}>
        Детали ингредиента
      </h1>
      <IngredientDetails/>
    </div>
  )
}

export default Ingredient
