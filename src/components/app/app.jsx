import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

	const [modalOrderState, setModalOrderState] = useState({
		visible: false,
	})
	const [modalIngredientState, setModalIngredientState] = useState({
		visible: false,
	})
	const [ingredient, setIngredient] = useState({})
	const [orderDetails, setOrderDetails] = useState()

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])

	const handleCloseModalOrder = () => {
		setModalOrderState({ visible: false })
	}

	const handleOpenModalIngredient = data => {
		setIngredient(data)
		setModalIngredientState({ visible: true })
	}

	const handleCloseModalIngredient = () => {
		setModalIngredientState({ visible: false })
	}

	const handleOpenOrderModal = () => {
		setModalOrderState({ visible: true })
	}

	return (
		<>
			<AppHeader />
			<main className={styles.main}>
				<BurgerIngredients
					config={burgerIngredientsConfig}
					openModal={handleOpenModalIngredient}
				/>
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
			{modalIngredientState.visible && (
				<Modal
					closeModal={handleCloseModalIngredient}
					title={'Детали ингредиента'}
				>
					<IngredientDetails ingredient={ingredient} />
				</Modal>
			)}
		</>
	)
}

export default App
