import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';

export const BurgerIngredientsCardsList = ({ data, type }) => {
  return data.map((item) => {
    if (item.type === type) {
      return <BurgerIngredientsCard key={item._id} item={item} />;
    }
    return null;
  });
};

export default BurgerIngredientsCardsList;
