import styles from './burger-ingredients-types-list.module.css';
import BurgerIngredientsType from '../burger-ingredients-type/burger-ingredients-type';
import PropTypes from 'prop-types';

const BurgerIngredientsTypesList = ({
  data,
  config,
  bunRef,
  sauceRef,
  mainRef,
}) => {
  return (
    <ul className={styles.types__list}>
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
  data: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired,
  bunRef: PropTypes.object.isRequired,
  sauceRef: PropTypes.object.isRequired,
  mainRef: PropTypes.object.isRequired,
};

export default BurgerIngredientsTypesList;
