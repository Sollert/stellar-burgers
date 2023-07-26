import PropTypes from 'prop-types'

import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card'
import { useSelector } from 'react-redux'

export const BurgerIngredientsCardsList = ({ type, openModal }) => {
	const ingredients = useSelector(store => store.ingredients.ingredients)

	return ingredients.map(item => {
		if (item.type === type) {
			return (
				<BurgerIngredientsCard
					key={item._id}
					item={item}
					openModal={openModal}
				/>
			)
		}
		return null
	})
}

BurgerIngredientsCardsList.propType = {
	type: PropTypes.string.isRequired,
	openModal: PropTypes.func.isRequired,
}

export default BurgerIngredientsCardsList
