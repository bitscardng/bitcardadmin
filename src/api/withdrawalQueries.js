import { apiSlice } from "./apiSlice";

const withdrawalQueries = apiSlice
  .enhanceEndpoints({ addTagTypes: ["withdrawal"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      ngnWithdrawals: builder.query({
        query: () => ({
          url: "withdrawal/pending-withdrawals",
        }),
        providesTags: ["withdrawal"],
      }),
      approvengnWithdrawals: builder.mutation({
        query: (id) => ({
          url: `withdrawal/approve-naira-withdrawal/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["withdrawal"],
      }),
      declinengnWithdrawals: builder.mutation({
        query: () => ({
          url: `withdrawal/decline-naira-withdrawal/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["withdrawal"],
      }),
    }),
  });

export const {
  useNgnWithdrawalsQuery,
  useApprovengnWithdrawalsMutation,
  useDeclinengnWithdrawalsMutation,
} = withdrawalQueries;
