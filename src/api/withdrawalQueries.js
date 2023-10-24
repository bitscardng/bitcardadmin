import { apiSlice } from "./apiSlice";

const withdrawalQueries = apiSlice
  .enhanceEndpoints({ addTagTypes: ["withdrawal"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      pendingngnWithdrawals: builder.query({
        query: () => ({
          url: "withdrawal/pending-withdrawals",
        }),
        providesTags: ["withdrawal"],
      }),
      ngnWithdrawals: builder.query({
        query: () => ({
          url: "withdrawal/ngn-withdrawals",
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
        query: (id) => ({
          url: `withdrawal/decline-naira-withdrawal/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["withdrawal"],
      }),
      getWithdrawal: builder.query({
        query: ({ id }) => ({
          url: `withdrawal/ngn-withdrawals/${id}`,
        }),
        providesTags: ["withdrawal"],
      }),
    }),
  });

export const {
  usePendingngnWithdrawalsQuery,
  useApprovengnWithdrawalsMutation,
  useDeclinengnWithdrawalsMutation,
  useNgnWithdrawalsQuery,
  useGetWithdrawalQuery,
} = withdrawalQueries;
