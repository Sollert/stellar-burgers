import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions as ingredientDetailsActions } from '../../services/store/ingredientDetails/ingredientDetails.slice.js'

import { getIngredients } from '../../services/store/ingredients/ingredients.actions'
import { burgerIngredientsConfig } from '../../utils/config'

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import IngredientDetails from '../ingredient-details/ingredient-details'

import styles from './app.module.css'

function App() {
	const dispatch = useDispatch()
	const modalIngredientState = useSelector(
		store => store.ingredientDetails.modalVisible
	)

	const [modalOrderState, setModalOrderState] = useState({
		visible: false,
	})
	const [orderDetails, setOrderDetails] = useState()

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])

	const handleCloseModalOrder = () => {
		setModalOrderState({ visible: false })
	}

	const handleOpenOrderModal = () => {
		setModalOrderState({ visible: true })
	}

	return (
		<>
			<AppHeader />
			<main className={styles.main}>
				<BurgerIngredients config={burgerIngredientsConfig} />
				<BurgerConstructor
					openModal={handleOpenOrderModal}
					setOrderDetails={setOrderDetails}
				/>
			</main>
			{modalOrderState.visible && (
				<Modal closeModal={handleCloseModalOrder}>
					<OrderDetails number={orderDetails['order'].number} />
				</Modal>
			)}
			{modalIngredientState && (
				<Modal
					closeModal={() => dispatch(ingredientDetailsActions.closeModal())}
					title={'Детали ингредиента'}
				>
					<IngredientDetails />
				</Modal>
			)}
		</>
	)
}

export default App
