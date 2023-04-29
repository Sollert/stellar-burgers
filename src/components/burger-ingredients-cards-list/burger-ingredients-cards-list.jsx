import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';
import PropTypes from 'prop-types';

export const BurgerIngredientsCardsList = ({ data, type }) => {
  return data.map((item) => {
    if (item.type === type) {
      return <BurgerIngredientsCard key={item._id} item={item} />;
    }
    return null;
  });
};

BurgerIngredientsCardsList.propType = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default BurgerIngredientsCardsList;
