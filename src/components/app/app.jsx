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

function App() {
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	const modalOrderState = useSelector(store => store.orderDetails.modalVisible)

	useEffect(() => {
		dispatch(getIngredients())
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
				</Route>
			</Routes>
			{background && (
				<Routes>
					<Route
						path='/ingredients/:id'
						element={
							<Modal closeModal={closeModalHandler}>
								<IngredientDetails />
							</Modal>
						}
					/>
				</Routes>
			)}

			{modalOrderState && (
				<Modal closeModal={() => dispatch(orderDetailsActions.closeModal())}>
					<OrderDetails />
				</Modal>
			)}
		</>
	)
}

export default App
