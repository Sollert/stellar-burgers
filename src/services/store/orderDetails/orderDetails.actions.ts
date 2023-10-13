import {createAsyncThunk} from '@reduxjs/toolkit'
import {sendOrderRequest} from '../../../utils/api/api'
import {getCookie} from '../../../utils/cookie/cookie'
import {OrderDetailsData} from "../../types/types";

export const createOrder = createAsyncThunk<
  OrderDetailsData,
  any
>('createOrder', async (ids: string[]) => {
  const token = `Bearer ${getCookie('token')}`
  const res = await sendOrderRequest(ids, token)
  return res.order
})
