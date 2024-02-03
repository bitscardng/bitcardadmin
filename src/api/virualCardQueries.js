import { apiSlice } from "./apiSlice";

const virtualCardQueries = apiSlice
  .enhanceEndpoints({ addTagTypes: ["virtual-card-transactions"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      virtualCardTransactions: builder.query({
        query: (param) => ({
          url: `virtual-card/virtual-card-transactions?page=${param?.page}&searchQuery=${
            param?.searchQuery || ""
          }&limit=10`,
        }),
        providesTags: ["virtual-card-transactions"],
      }),
    }),
  });

export const {
  useVirtualCardTransactionsQuery,
  useLazyVirtualCardTransactionsQuery,
} = virtualCardQueries;
