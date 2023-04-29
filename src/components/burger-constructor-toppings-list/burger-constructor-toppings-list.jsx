import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export const BurgerConstructorToppingsList = ({ data }) => {
  return data.map((item) => {
    if (item.type !== 'bun') {
      return (
        <li key={item._id}>
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
  data: PropTypes.array.isRequired,
};

export default BurgerConstructorToppingsList;
