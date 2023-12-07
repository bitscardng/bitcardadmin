import { apiSlice } from "./apiSlice";

const depositQueries = apiSlice
  .enhanceEndpoints({ addTagTypes: ["deposit"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      ngnDeposit: builder.query({
        query: (param) => ({
          url: `deposit/ngn-deposit?page=${param?.page}&searchQuery=sikiru&limit=10`,
        }),
        providesTags: ["deposit"],
      }),
    }),
  });

export const { useNgnDepositQuery, useLazyNgnDepositQuery } = depositQueries;
