import {useCallback, useEffect} from 'react'

import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import {actions as orderDetailsActions} from '../../services/store/orderDetails/orderDetails.slice'

import {getIngredients} from '../../services/store/ingredients/ingredients.actions'
import IngredientDetails from '../ingredient/ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import OrderDetails from '../order/order-details/order-details'

import Home from '../../pages/home/home'
import Ingredient from '../../pages/ingredient/ingredient'
import Layout from '../../pages/layout/layout'
import NotFound from '../not-found/not-found'
import Login from '../../pages/login/login'
import Register from '../../pages/register/register'
import Profile from '../../pages/profile/profile'
import ProfileForm from '../profile-form/profile-form'
import ProtectedRoute from '../protected-route/protected-route'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import {getUserInfo} from '../../services/store/user/user.actions'
import Feed from '../../pages/feed/feed'
import OrdersHistory from '../orders/orders-history/orders-history'
import {Order} from '../../pages/order/order'
import OrderInfo from '../order/order-info/order-info'

import styles from './app.module.css'
import Loader from '../loader/loader'
import {useAppDispatch, useAppSelector} from "../../services/hooks/hooks";

function App() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const modalOrderState = useAppSelector(store => store.orderDetails.modalVisible)
  const orderState = useAppSelector(store => store.orderDetails.order)

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUserInfo())
  }, [dispatch])

  useEffect(() => {
    if (location.state?.background) {
      window.history.replaceState({}, '')
    }
  }, [location.state?.background])

  const background = location.state?.background

  const closeModalHandler = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/ingredients/:id' element={<Ingredient/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route
            path='profile'
            element={
              <ProtectedRoute anonymous={false}>
                <Profile/>
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileForm/>}/>
            <Route path='/profile/orders' element={<OrdersHistory/>}/>
          </Route>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/feed/:id' element={<Order/>}/>
          <Route
            path='/profile/orders/:id'
            element={
              <ProtectedRoute anonymous={false}>
                <Order/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/login'
            element={
              <ProtectedRoute anonymous>
                <Login/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/register'
            element={
              <ProtectedRoute anonymous>
                <Register/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/forgot-password'
            element={
              <ProtectedRoute anonymous>
                <ForgotPassword/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/reset-password'
            element={
              <ProtectedRoute anonymous>
                <ResetPassword/>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <Modal closeModal={closeModalHandler}>
                <h2
                  className={`${styles['ingredient-modal-title']} text_type_main-large`}
                >
                  Детали ингредиента
                </h2>
                <IngredientDetails/>
              </Modal>
            }
          />
          <Route
            path='/feed/:id'
            element={
              <Modal closeModal={closeModalHandler}>
                <OrderInfo isModal/>
              </Modal>
            }
          />
          <Route
            path='/profile/orders/:id'
            element={
              <ProtectedRoute anonymous={false}>
                <Modal closeModal={closeModalHandler}>
                  <OrderInfo isModal/>
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}

      {modalOrderState && (
        <Modal closeModal={() => dispatch(orderDetailsActions.closeModal())}>
          {orderState ? <OrderDetails/> : <Loader/>}
        </Modal>
      )}
    </>
  )
}

export default App
