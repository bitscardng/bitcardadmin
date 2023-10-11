import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: null,
  user: {},
  otp: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const selectisLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const { setOtp } = authSlice.actions;
export default authSlice.reducer;
