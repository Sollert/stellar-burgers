import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { actions as ingredientDetailsActions } from '../../services/store/ingredientDetails/ingredientDetails.slice.js'
import { actions as orderDetailsActions } from '../../services/store/orderDetails/orderDetails.slice.js'

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
	const modalOrderState = useSelector(store => store.orderDetails.modalVisible)

	useEffect(() => {
		dispatch(getIngredients())
	}, [dispatch])

	return (
		<>
			<AppHeader />
			<DndProvider backend={HTML5Backend}>
				<main className={styles.main}>
					<BurgerIngredients config={burgerIngredientsConfig} />
					<BurgerConstructor />
				</main>
			</DndProvider>
			{modalOrderState && (
				<Modal closeModal={() => dispatch(orderDetailsActions.closeModal())}>
					<OrderDetails />
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
