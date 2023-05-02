import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types.js';

export const BurgerIngredientsCardsList = ({ data, type, openModal }) => {
  return data.map((item) => {
    if (item.type === type) {
      return <BurgerIngredientsCard key={item._id} item={item} openModal={openModal} />;
    }
    return null;
  });
};

BurgerIngredientsCardsList.propType = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsCardsList;
