import { apiSlice } from "./apiSlice";

export const giftCardSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["giftcard", "giftcard-info", "crypto-rates"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPendingBuyTranx: builder.query({
        query: () => ({
          url: "gift-card/pending-buy-transactions",
        }),
        providesTags: ["giftcard"],
      }),
      getPendingSellTranx: builder.query({
        query: () => ({
          url: "gift-card/pending-sell-transactions",
        }),
        providesTags: ["giftcard"],
      }),
      getPendingBuyTranx: builder.query({
        query: () => ({
          url: "gift-card/pending-buy-transactions",
        }),
        providesTags: ["giftcard-buy"],
      }),
      getGiftCardBuyInfo: builder.query({
        query: () => ({
          url: `gift-card/get-giftcard-info/Buy`,
        }),
        transformResponse: (response) => {
          const result = response?.data?.map((e) => ({
            ...e,
            countriesSelect: e?.countries.map((c) => ({ label: c, value: c })),
            cardSelect: e?.card_types.map((c) => ({ label: c, value: c })),
            denominationsSelect: e?.denominations.map((c) => ({
              label: c,
              value: c,
            })),
          }));
          return result;
        },
        providesTags: ["giftcard-info", "giftcard"],
      }),
      getGiftCardSellInfo: builder.query({
        query: () => ({
          url: `gift-card/get-giftcard-info/Sell`,
        }),
        transformResponse: (response) => {
          const result = response?.data?.map((e) => ({
            ...e,
            countriesSelect: e?.countries.map((c) => ({ label: c, value: c })),
            cardSelect: e?.card_types.map((c) => ({ label: c, value: c })),
            denominationsSelect: e?.denominations.map((c) => ({
              label: c,
              value: c,
            })),
          }));
          return result;
        },
        providesTags: ["giftcard-info", "giftcard"],
      }),
      getBuyGiftCard: builder.query({
        query: (body) => ({
          url: `gift-card/get-giftcard/${body?.name}/Buy`,
        }),
        providesTags: ["giftcard", "giftcard-info"],
      }),
      getSellGiftCard: builder.query({
        query: (body) => ({
          url: `gift-card/get-giftcard/${body?.name}/Sell`,
        }),
        providesTags: ["giftcard", "giftcard-info"],
      }),
      createGiftCardInfo: builder.mutation({
        query: (body) => ({
          url: "gift-card/create-giftcard-info",
          body,
          method: "POST",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      createGiftCard: builder.mutation({
        query: (body) => ({
          url: "gift-card/create-giftcard-sell",
          body,
          method: "POST",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      createBuyGiftCard: builder.mutation({
        query: (body) => ({
          url: "gift-card/create-giftcard-buy",
          body,
          method: "POST",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      updateGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/update-giftcard/${body.id}`,
          body: body.payload,
          method: "PATCH",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      deleteGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/delete-giftcard/${body.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      deleteGiftCardInfo: builder.mutation({
        query: (body) => ({
          url: `gift-card/delete-giftcard-info/${body.card_name}`,
          method: "DELETE",
        }),
        invalidatesTags: ["giftcard-info", "giftcard"],
      }),
      acceptGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/accept-giftcard-sell/${body.id}`,
          method: "PATCH",
        }),
      }),
      acceptBuyGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/accept-giftcard-buy/${body.id}`,
          method: "PATCH",
        }),
      }),
      processGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/process-giftcard-buy/${body.id}`,
          method: "PATCH",
        }),
      }),
      declineGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/decline-giftcard-sell/${body.id}`,
          method: "PATCH",
        }),
      }),
      declineBuyGiftCard: builder.mutation({
        query: (body) => ({
          url: `gift-card/decline-giftcard-buy/${body.id}`,
          method: "PATCH",
        }),
      }),
      sendGiftCardSms: builder.mutation({
        query: (body) => ({
          url: "gift-card/send-giftcard-sms",
          body,
          method: "POST",
        }),
      }),
      sendGiftCardMail: builder.mutation({
        query: (body) => ({
          url: "gift-card/send-giftcard-email",
          body,
          method: "POST",
        }),
      }),
    }),
  });

export const {
  useAcceptGiftCardMutation,
  useAcceptBuyGiftCardMutation,
  useCreateGiftCardInfoMutation,
  useCreateGiftCardMutation,
  useCreateBuyGiftCardMutation,
  useDeclineGiftCardMutation,
  useDeclineBuyGiftCardMutation,
  useDeleteGiftCardMutation,
  useDeleteGiftCardInfoMutation,
  useGetGiftCardBuyInfoQuery,
  useGetGiftCardSellInfoQuery,
  useLazyGetBuyGiftCardQuery,
  useLazyGetSellGiftCardQuery,
  useGetPendingBuyTranxQuery,
  useGetPendingSellTranxQuery,
  useProcessGiftCardMutation,
  useUpdateGiftCardMutation,
  useSendGiftCardMailMutation,
  useSendGiftCardSmsMutation,
  useLazyGetPendingSellTranxQuery,
  useLazyGetPendingBuyTranxQuery,
} = giftCardSlice;
