import { apiSlice } from "./apiSlice";

export const dashboardStatSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: "statistics",
      }),
      providesTags: ["dashboardStats"],
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardStatSlice;
