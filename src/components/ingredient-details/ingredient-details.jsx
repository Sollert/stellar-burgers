import styles from './ingredient-details.module.css';
import { ingredientPropType } from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={styles.details__container}>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className="mb-4"
      />
      <h3
        className={`${styles.details__title} text text_type_main-medium mb-8`}
      >
        {ingredient.name}
      </h3>
      <ul className={`${styles.details__list} text text_color_inactive`}>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className="text_type_main-default">Калории,ккал</span>
          {ingredient.calories}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className="text_type_main-default">Белки, г</span>
          {ingredient.proteins}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className="text_type_main-default">Жиры, г</span>
          {ingredient.fat}
        </li>
        <li className={`${styles.details__listItem} text_type_digits-default`}>
          <span className="text_type_main-default">Углеводы, г</span>
          {ingredient.carbohydrates}
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default IngredientDetails;
