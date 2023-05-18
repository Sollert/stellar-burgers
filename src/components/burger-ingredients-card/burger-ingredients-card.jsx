import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients-card.module.css';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { BurgerConstructorContext } from '../../services/contexts/burger-constructor-context';

const BurgerIngredientsCard = ({ item, openModal }) => {
  const { cart, cartDispatch } = useContext(BurgerConstructorContext);

  const findIngredientInCart = (cart, ingredient) => {
    if (isIngredientInCart(cart, item)) {
      return cart['ids'].filter((cartItem) => {
        return ingredient._id === cartItem;
      });
    }
    return null;
  };

  const isIngredientInCart = (cart, ingredient) => {
    return cart['ids'].find((cartItem) => {
      return ingredient._id === cartItem;
    });
  };

  return (
    <li
      className={styles.card}
      onClick={() => {
        item.type === 'bun'
          ? cartDispatch({ type: 'ADD_BUN', item: item })
          : cartDispatch({ type: 'ADD_TOPPING', item: item });
      }}
    >
      {findIngredientInCart(cart, item) && (
        <Counter
          count={findIngredientInCart(cart, item).length}
          size="default"
        />
      )}
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
