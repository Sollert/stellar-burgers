import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getUserInfo, loginUser, logoutUser, patchUserInfo, registerUser,} from './user.actions'
import {UserInfoData, UserInitialState} from "../../types/types";

const initialState: UserInitialState = {
  isRequest: false,
  isError: false,
  isAuth: false,
  user: null,
}

const userSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.isRequest = true
      state.isError = false
    })
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<UserInfoData>) => {
      state.isRequest = false
      state.isAuth = true
      state.user = action.payload
    })
    builder.addCase(registerUser.rejected, state => {
      state.isRequest = false
      state.isError = true
    })
    builder.addCase(loginUser.pending, state => {
      state.isRequest = true
      state.isError = false
    })
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<UserInfoData>) => {
      state.isRequest = false
      state.isAuth = true
      state.user = action.payload
    })
    builder.addCase(loginUser.rejected, state => {
      state.isRequest = false
      state.isError = true
      state.isAuth = false
      state.user = null
    })
    builder.addCase(getUserInfo.pending, state => {
      state.isRequest = true
      state.isError = false
    })
    builder.addCase(getUserInfo.fulfilled, (state, action: PayloadAction<UserInfoData>) => {
      state.isRequest = false
      state.isAuth = true
      state.user = action.payload
    })
    builder.addCase(getUserInfo.rejected, state => {
      state.isRequest = false
      state.isError = true
    })
    builder.addCase(logoutUser.pending, state => {
      state.isRequest = true
      state.isError = false
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isRequest = false
      state.isAuth = false
      state.user = null
    })
    builder.addCase(logoutUser.rejected, state => {
      state.isRequest = false
      state.isError = true
    })
    builder.addCase(patchUserInfo.pending, state => {
      state.isRequest = true
      state.isError = false
    })
    builder.addCase(patchUserInfo.fulfilled, (state, action: PayloadAction<UserInfoData>) => {
      state.isRequest = false
      state.isAuth = true
      state.user = action.payload
    })
    builder.addCase(patchUserInfo.rejected, state => {
      state.isRequest = false
      state.isError = true
    })
  },
})

export const {actions, reducer} = userSlice
