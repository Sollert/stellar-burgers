import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BurgerIngredientsContext } from '../../services/contexts/burger-ingredients-context';

export const BurgerIngredientsCardsList = ({ type, openModal }) => {
  const { ingredientsData } = useContext(BurgerIngredientsContext)
  return ingredientsData.map((item) => {
    if (item.type === type) {
      return <BurgerIngredientsCard key={item._id} item={item} openModal={openModal} />;
    }
    return null;
  });
};

BurgerIngredientsCardsList.propType = {
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsCardsList;
