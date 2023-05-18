import { useContext } from 'react';
import PropTypes from 'prop-types';

import { BurgerIngredientsContext } from '../../services/contexts/burger-ingredients-context';

import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';

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
