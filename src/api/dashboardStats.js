import { apiSlice } from "./apiSlice";

export const dashboardStatsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: "statistics",
      }),
      providesTags: ["dashboardStats"],
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardStatsSlice;
