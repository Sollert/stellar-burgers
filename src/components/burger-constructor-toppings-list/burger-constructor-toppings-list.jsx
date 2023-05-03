import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-toppings-list.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export const BurgerConstructorToppingsList = ({ data }) => {
  return data.map((item) => {
    if (item.type !== 'bun') {
      return (
        <li key={item._id} className={styles.topping}>
          <DragIcon />
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </li>
      );
    }
    return null;
  });
};

BurgerConstructorToppingsList.propType = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerConstructorToppingsList;
