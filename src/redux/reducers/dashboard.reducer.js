import { createSlice } from "@reduxjs/toolkit";
import { AsyncActions } from "../actionTypes/auth.actionTypes";

const initialState = {
  isLoading: null,
  data: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default dashboardSlice.reducer;
