import { createSlice } from "@reduxjs/toolkit";
import {
  createAdmin,
  login,
  logout,
  refreshAuth,
  getUser,
} from "../actions/auth.actions";
import { AsyncActions } from "../actionTypes/auth.actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: null,
  user: {},
  otp: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = AsyncActions.login;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = null;
        state.otp = action.payload.data.otp;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = AsyncActions.getUser;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = null;
        state.user = action.payload.data.user;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(createAdmin.pending, (state) => {
        state.isLoading = AsyncActions.createAdmin;
      })
      .addCase(createAdmin.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(createAdmin.rejected, (state) => {
        state.isLoading = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = AsyncActions.logout;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = null;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = null;
      });
  },
});

export const selectisLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
