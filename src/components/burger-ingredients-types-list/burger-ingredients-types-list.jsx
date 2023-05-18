import BurgerIngredientsType from '../burger-ingredients-type/burger-ingredients-type';
import PropTypes from 'prop-types';

import {
  ingredientConfigPropType,
  refsPropType,
} from '../../utils/prop-types';

import styles from './burger-ingredients-types-list.module.css';

const BurgerIngredientsTypesList = ({
  config,
  bunRef,
  sauceRef,
  mainRef,
  openModal,
}) => {
  return (
    <ul className={`${styles.types__list} custom-scroll`}>
      <BurgerIngredientsType
        config={config}
        type={'bun'}
        ref={bunRef}
        openModal={openModal}
      />
      <BurgerIngredientsType
        config={config}
        type={'sauce'}
        ref={sauceRef}
        openModal={openModal}
      />
      <BurgerIngredientsType
        config={config}
        type={'main'}
        ref={mainRef}
        openModal={openModal}
      />
    </ul>
  );
};

BurgerIngredientsTypesList.propTypes = {
  config: ingredientConfigPropType.isRequired,
  bunRef: refsPropType.isRequired,
  sauceRef: refsPropType.isRequired,
  mainRef: refsPropType.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsTypesList;
