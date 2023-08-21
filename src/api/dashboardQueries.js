import { apiSlice } from "./apiSlice";

export const dashboardStatSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ["dashboardStats"] })
  .injectEndpoints({
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
