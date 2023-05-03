import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const BurgerIngredientsTabs = ({ current, setCurrent }) => {
  return (
    <ul className={`${styles.tabs__list} mb-10`}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </ul>
  );
};

BurgerIngredientsTabs.propType = {
  current: PropTypes.oneOf(['Булки', 'Соусы', 'Начинки']).isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default BurgerIngredientsTabs;
