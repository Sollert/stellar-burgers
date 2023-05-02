import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients-card.module.css';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';

const BurgerIngredientsCard = ({ item, openModal }) => {
  return (
    <li
      className={styles.card}
      onClick={() => {
        openModal(item);
      }}
    >
      <Counter count={1} size="default" />
      <img className={'mb-2'} src={item.image} alt={item.name} />
      <p className={styles.card__priceContainer}>
        <span className={'text_type_digits-default'}>{item.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <h4 className={'text text_type_main-default'}>{item.name}</h4>
    </li>
  );
};

BurgerIngredientsCard.propTypes = {
  item: ingredientPropType.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsCard;
