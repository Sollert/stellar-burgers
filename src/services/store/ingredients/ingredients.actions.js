import { createAsyncThunk } from '@reduxjs/toolkit'
import { getIngredientsData } from '../../../utils/api/api'

export const getIngredients = createAsyncThunk('getIngredients', async () => {
	const res = await getIngredientsData()
	return res.data
})
