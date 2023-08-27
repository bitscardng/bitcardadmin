import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authReducer from "./reducers/auth.reducer";
import dashboardReducer from "./reducers/dashboard.reducer";
import { smsApiSlice } from "../api/smsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [smsApiSlice.reducerPath]: smsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, smsApiSlice.middleware),
});
