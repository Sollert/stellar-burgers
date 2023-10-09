import BurgerConstructorTopping from '../burger-constructor-topping/burger-constructor-topping'
import {useAppSelector} from "../../../services/hooks/hooks";

export const BurgerConstructorToppingsList = (): JSX.Element => {
  const cart = useAppSelector(store => store.cart)

  return <>
    {cart['toppings'].map((item, index) => (
      <BurgerConstructorTopping key={item.uid} ingredient={item} index={index}/>
    ))
    }
  </>
}

export default BurgerConstructorToppingsList
