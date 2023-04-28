import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';

export const BurgerIngredientsCardList = ({ data, type }) => {
  return data[type].items.map((item) => {
    return <BurgerIngredientsCard key={item._id} item={item} />;
  });
};

export default BurgerIngredientsCardList;
