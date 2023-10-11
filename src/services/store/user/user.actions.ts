import {createAsyncThunk} from '@reduxjs/toolkit'
import {
  getUserInfoRequest,
  loginUserRequest,
  logoutUserRequest,
  patchUserInfoRequest,
  registerUserRequest,
} from '../../../utils/api/api'
import {saveTokens} from '../../../utils/utils'
import {UserInfoData} from "../../types/types";

export const registerUser = createAsyncThunk<
  UserInfoData,
  any
>('registerUser', async data => {
  const res = await registerUserRequest(data)
  const {user, accessToken, refreshToken} = res
  saveTokens({accessToken, refreshToken})
  return user
})

export const loginUser = createAsyncThunk<
  UserInfoData,
  any
>('loginUser', async data => {
  const res = await loginUserRequest(data)
  if (res.success) {
    const {user, accessToken, refreshToken} = res
    saveTokens({accessToken, refreshToken})
    return user
  }
})

export const getUserInfo = createAsyncThunk<
  UserInfoData,
  void
>('getUserInfo', async () => {
  const res = await getUserInfoRequest()
  if (res.success) {
    return res.user
  }
})

export const logoutUser = createAsyncThunk('logoutUser', async () => {
  const res = await logoutUserRequest()
  return res
})

export const patchUserInfo = createAsyncThunk<
  UserInfoData,
  any
>('patchUserInfo', async data => {
  const res = await patchUserInfoRequest(data)
  return res.user
})
