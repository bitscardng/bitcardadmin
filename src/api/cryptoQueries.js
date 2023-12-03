import { apiSlice } from "./apiSlice";

export const cryptoQueries = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["transfer", "crypto-rates"],
  })
  .injectEndpoints({
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
        invalidatesTags: ["crypto-rates"],
      }),
      btcSellProfit: builder.mutation({
        query: (profit) => ({
          url: "crypto-transactions/btc-sell-profit",
          method: "PATCH",
          body: { profit },
        }),
        invalidatesTags: ["crypto-rates"],
      }),
      usdtBuyProfit: builder.mutation({
        query: (profit) => ({
          url: "crypto-transactions/usdt-buy-profit",
          method: "PATCH",
          body: { profit },
        }),
        invalidatesTags: ["crypto-rates"],
      }),
      usdtSellProfit: builder.mutation({
        query: (profit) => ({
          url: "crypto-transactions/usdt-sell-profit",
          method: "PATCH",
          body: { profit },
        }),
        invalidatesTags: ["crypto-rates"],
      }),
      usdBuyProfit: builder.mutation({
        query: (profit) => ({
          url: "crypto-transactions/usd-buy-profit",
          method: "PATCH",
          body: { profit },
        }),
        invalidatesTags: ["crypto-rates"],
      }),
      usdSellProfit: builder.mutation({
        query: (profit) => ({
          url: "crypto-transactions/usd-sell-profit",
          method: "PATCH",
          body: { profit },
        }),
        invalidatesTags: ["crypto-rates"],
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
      getCryptoRates: builder.query({
        query: () => ({
          url: "crypto-transactions/bitscard-rates",
        }),
        providesTags: ["crypto-rates"],
      }),
      updateRmdRate: builder.mutation({
        query: (body) => ({
          url: `gift-card/edit-rmdrate`,
          method: "PATCH",
          body,
        }),
        invalidatesTags: ["crypto-rates"],
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
  useUsdBuyProfitMutation,
  useUsdSellProfitMutation,
  useGetCryptoRatesQuery,
  useUpdateRmdRateMutation,
} = cryptoQueries;
