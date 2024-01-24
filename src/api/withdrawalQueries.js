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
      getWithdrawalInfo: builder.query({
        query: ({ id, email }) => ({
          url: `withdrawal/withdrawal-info/${id}/${email}`,
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
  useGetWithdrawalInfoQuery,
} = withdrawalQueries;
