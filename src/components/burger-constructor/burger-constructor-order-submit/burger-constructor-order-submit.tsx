import {Button, CurrencyIcon,} from '@ya.praktikum/react-developer-burger-ui-components'

import {actions as cartActions} from '../../../services/store/cart/cart.slice'
import {createOrder} from '../../../services/store/orderDetails/orderDetails.actions'

import styles from './burger-constructor-order-submit.module.css'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../../../services/hooks/hooks";

const BurgerConstructorOrderSubmit = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userIsAuth = useAppSelector(store => store.user.isAuth)
  const totalPrice = useAppSelector(store => store.cart.totalPrice)
  const bun = useAppSelector(store => store.cart.bun)
  const toppings = useAppSelector(store => store.cart.toppings)

  const ids = [bun?._id, ...toppings.map(item => item._id)]

  const handleCreateOrder = () => {
    if (userIsAuth) {
      dispatch(createOrder(ids))
      dispatch(cartActions.resetCart())
    } else {
      navigate('/login')
    }
  }

  return (
    <div className={`${styles.submit__container} mr-4`}>
      <p className={styles.price__container}>
        <span className='text text_type_digits-medium'>{totalPrice}</span>
        <CurrencyIcon type='primary'/>
      </p>
      <Button
        htmlType='button'
        type='primary'
        size='large'
        onClick={handleCreateOrder}
      >
        Оформить заказ
      </Button>
    </div>
  )
}

export default BurgerConstructorOrderSubmit
