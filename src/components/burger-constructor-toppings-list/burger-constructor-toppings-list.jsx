import { useContext } from 'react';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { BurgerConstructorContext } from '../../services/contexts/burger-constructor-context';

import styles from './burger-constructor-toppings-list.module.css';

export const BurgerConstructorToppingsList = () => {
  const { cart, cartDispatch } = useContext(BurgerConstructorContext);
  return cart['toppings'].map((item, index) => {
    return (
      <li key={index} className={styles.topping}>
        <DragIcon />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    );
  });
};

export default BurgerConstructorToppingsList;
