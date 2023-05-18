import styles from './burger-ingredients.module.css';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ingredientPropType,
  ingredientConfigPropType,
} from '../../utils/prop-types';

import BurgerIngredientsTabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import BurgerIngredientsTypesList from '../burger-ingredients-types-list/burger-ingredients-types-list';

const BurgerIngredients = ({ config, openModal }) => {
  const [currentTab, setCurrentTab] = useState('Булки');

  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  const setCurrentType = (evt) => {
    setCurrentTab(evt);

    if (evt === 'Булки') {
      bunRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (evt === 'Соусы') {
      sauceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (evt === 'Начинки') {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.container} pt-10`}>
      <h2 className={'text text_type_main-large mb-5'}>Соберите бургер</h2>
      <BurgerIngredientsTabs current={currentTab} setCurrent={setCurrentType} />
      <BurgerIngredientsTypesList
        config={config}
        bunRef={bunRef}
        sauceRef={sauceRef}
        mainRef={mainRef}
        openModal={openModal}
      />
    </section>
  );
};

BurgerIngredients.propType = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  config: ingredientConfigPropType.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
