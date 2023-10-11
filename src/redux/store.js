import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, testApiSlice } from "../api/apiSlice";
import authReducer from "./reducers/auth.reducer";
import dashboardReducer from "./reducers/dashboard.reducer";
import { smsApiSlice } from "../api/smsApiSlice";
import { campaignApiSlice } from "../api/campaignApiSlice";
import { marketApiSlice } from "../api/marketApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [smsApiSlice.reducerPath]: smsApiSlice.reducer,
    [campaignApiSlice.reducerPath]: campaignApiSlice.reducer,
    [marketApiSlice.reducerPath]: marketApiSlice.reducer,
    [testApiSlice.reducerPath]: testApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      smsApiSlice.middleware,
      campaignApiSlice.middleware,
      marketApiSlice.middleware,
      testApiSlice.middleware
    ),
});
