import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { actions as orderDetailsActions } from '../../services/store/orderDetails/orderDetails.slice.js'

import { getIngredients } from '../../services/store/ingredients/ingredients.actions'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'

import Home from '../../pages/home/home.jsx'
import Ingredient from '../../pages/ingredient/ingredient.jsx'
import Layout from '../../pages/layout/layout.jsx'
import NotFound from '../not-found/not-found.jsx'
import Login from '../../pages/login/login.jsx'
import Register from '../../pages/register/register.jsx'
import Profile from '../../pages/profile/profile.jsx'
import ProfileForm from '../profile-form/profile-form.jsx'
import ProtectedRoute from '../protected-route/protected-route.jsx'
import ForgotPassword from '../../pages/forgot-password/forgot-password.jsx'
import ResetPassword from '../../pages/reset-password/reset-password.jsx'
import { getUserInfo } from '../../services/store/user/user.actions.js'
import Feed from '../../pages/feed/feed.jsx'
import OrdersHistory from '../orders-history/orders-history.jsx'
import { Order } from '../../pages/order/order.jsx'
import OrderInfo from '../order-info/order-info.jsx'

import styles from './app.module.css'
import Loader from '../loader/loader.jsx'

function App() {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	const modalOrderState = useSelector(store => store.orderDetails.modalVisible)
	const orderState = useSelector(store => store.orderDetails.order)

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
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/ingredients/:id' element={<Ingredient />} />
					<Route path='*' element={<NotFound />} />
					<Route
						path='profile'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					>
						<Route index element={<ProfileForm />} />
						<Route path='/profile/orders' element={<OrdersHistory />} />
					</Route>
					<Route path='/feed' element={<Feed />} />
					<Route path='/feed/:id' element={<Order />} />
					<Route
						path='/profile/orders/:id'
						element={
							<ProtectedRoute>
								<Order />
							</ProtectedRoute>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={
						<ProtectedRoute anonymous>
							<Login />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<ProtectedRoute anonymous>
							<Register />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/forgot-password'
					element={
						<ProtectedRoute anonymous>
							<ForgotPassword />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/reset-password'
					element={
						<ProtectedRoute anonymous>
							<ResetPassword />
						</ProtectedRoute>
					}
				/>
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
								<IngredientDetails />
							</Modal>
						}
					/>
					<Route
						path='/feed/:id'
						element={
							<Modal closeModal={closeModalHandler}>
								<OrderInfo isModal />
							</Modal>
						}
					/>
					<Route
						path='/profile/orders/:id'
						element={
							<ProtectedRoute>
								<Modal closeModal={closeModalHandler}>
									<OrderInfo isModal />
								</Modal>
							</ProtectedRoute>
						}
					/>
				</Routes>
			)}

			{modalOrderState && (
				<Modal closeModal={() => dispatch(orderDetailsActions.closeModal())}>
					{orderState ? <OrderDetails /> : <Loader />}
				</Modal>
			)}
		</>
	)
}

export default App
