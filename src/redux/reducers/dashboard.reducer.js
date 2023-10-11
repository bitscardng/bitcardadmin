import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: null,
  data: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
