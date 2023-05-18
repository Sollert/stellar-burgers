import styles from './burger-ingredients-type.module.css';
import BurgerIngredientsCardsList from '../burger-ingredients-cards-list/burger-ingredients-cards-list';
import { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ingredientPropType,
  ingredientConfigPropType,
} from '../../utils/prop-types';

const BurgerIngredientsType = forwardRef(({ type, config, openModal }, ref) => {
  return (
    <li>
      <h3
        className={`${styles.card__title} text text_type_main-medium`}
        ref={ref}
      >
        {config[type].title}
      </h3>
      <ul className={styles.type__list}>
        <BurgerIngredientsCardsList type={type} openModal={openModal} />
      </ul>
    </li>
  );
});

BurgerIngredientsType.propTypes = {
  config: ingredientConfigPropType.isRequired,
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsType;
