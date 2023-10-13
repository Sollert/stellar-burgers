import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card'
import {useAppSelector} from "../../../services/hooks/hooks";
import {BurgerIngredientsCardsListProps} from "../../../services/types/types";

export const BurgerIngredientsCardsList = ({type}: BurgerIngredientsCardsListProps) => {
  const ingredients = useAppSelector(store => store.ingredients.ingredients)

  return <>{
    ingredients.map(item => {
      if (item.type === type) {
        return <BurgerIngredientsCard key={item._id} item={item}/>
      }
      return null
    })
  }</>
}

export default BurgerIngredientsCardsList
