import { apiSlice } from "./apiSlice";

export const cryptoQueries = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransferList: builder.query({
      query: () => ({
        url: "crypto-transactions/pending-transfers",
      }),
      providesTags: ["transfer"],
    }),
    btcBuyProfit: builder.mutation({
      query: (profit) => ({
        url: "crypto-transactions/btc-buy-profit",
        method: "PATCH",
        body: { profit },
      }),
    }),
    btcSellProfit: builder.mutation({
      query: (profit) => ({
        url: "crypto-transactions/btc-sell-profit",
        method: "PATCH",
        body: { profit },
      }),
    }),
    usdtBuyProfit: builder.mutation({
      query: (profit) => ({
        url: "crypto-transactions/usdt-buy-profit",
        method: "PATCH",
        body: { profit },
      }),
    }),
    usdtSellProfit: builder.mutation({
      query: (profit) => ({
        url: "crypto-transactions/usdt-sell-profit",
        method: "PATCH",
        body: { profit },
      }),
    }),
    approveTransfer: builder.mutation({
      query: (id) => ({
        url: `crypto-transactions/aprrove-crypto-transfer/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["transfer"],
    }),
    declineTransfer: builder.mutation({
      query: (id) => ({
        url: `crypto-transactions/decline-crypto-transfer/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["transfer"],
    }),
  }),
});

export const {
  useApproveTransferMutation,
  useBtcBuyProfitMutation,
  useBtcSellProfitMutation,
  useDeclineTransferMutation,
  useUsdtBuyProfitMutation,
  useGetTransferListQuery,
  useUsdtSellProfitMutation,
} = cryptoQueries;
