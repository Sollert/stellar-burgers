import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients-card.module.css';

const BurgerIngredientsCard = ({ item }) => {
  return (
    <li className={styles.card}>
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

export default BurgerIngredientsCard;
