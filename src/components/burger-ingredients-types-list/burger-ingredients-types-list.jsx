import styles from './burger-ingredients-types-list.module.css';
import BurgerIngredientsType from '../burger-ingredients-type/burger-ingredients-type';
import PropTypes from 'prop-types';
import {
  ingredientPropType,
  ingredientConfigPropType,
} from '../../utils/prop-types';

const BurgerIngredientsTypesList = ({
  data,
  config,
  bunRef,
  sauceRef,
  mainRef,
}) => {
  return (
    <ul className={`${styles.types__list} custom-scroll`}>
      <BurgerIngredientsType
        data={data}
        config={config}
        type={'bun'}
        ref={bunRef}
      />
      <BurgerIngredientsType
        data={data}
        config={config}
        type={'sauce'}
        ref={sauceRef}
      />
      <BurgerIngredientsType
        data={data}
        config={config}
        type={'main'}
        ref={mainRef}
      />
    </ul>
  );
};

BurgerIngredientsTypesList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  config: ingredientConfigPropType.isRequired,
  bunRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  sauceRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  mainRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default BurgerIngredientsTypesList;
