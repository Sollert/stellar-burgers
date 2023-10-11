import {createAsyncThunk} from '@reduxjs/toolkit'
import {getIngredientsData} from '../../../utils/api/api'
import {IngredientData} from "../../types/types"

export const getIngredients = createAsyncThunk<
  IngredientData[],
  void
>('getIngredients', async () => {
  const res = await getIngredientsData()
  return res.data
})
