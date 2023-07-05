import { createSlice } from "@reduxjs/toolkit";

const adminValue = {

  email: "",
  password:""
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { value: adminValue },
  reducers: {
    SET_LOGIN: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_LOGIN } = authSlice.actions;

export const selectName = (state) => state.auth.name;

export default authSlice.reducer;
