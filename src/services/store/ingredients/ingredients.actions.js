import { createAsyncThunk } from '@reduxjs/toolkit'
import { getIngredientsData } from '../../../utils/api'

export const getIngredients = createAsyncThunk('getIngredients', async () => {
	try {
		const res = await getIngredientsData()
		return res.data
	} catch (err) {
		console.log(err)
	}
})
