import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/auth.actions";
import { loginActions } from "../actionTypes/auth.actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: null,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = loginActions.isLoading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = null;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = null;
      });
  },
});

export const selectisLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
