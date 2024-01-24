import { apiSlice } from "./apiSlice";

const virtualCardQueries = apiSlice
  .enhanceEndpoints({ addTagTypes: ["virtual-card-transactions"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      virtualCardTransactions: builder.query({
        query: () => ({
          url: "virtual-card/virtual-card-transactions",
        }),
        providesTags: ["virtual-card-transactions"],
      }),
    }),
  });

export const { useVirtualCardTransactionsQuery } = virtualCardQueries;
