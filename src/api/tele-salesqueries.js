import { testApiSlice } from "./apiSlice";

const telesalesQueries = testApiSlice
  .enhanceEndpoints({
    addTagTypes: ["telesales"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTeleSales: builder.query({
        query: (param) => ({
          url: `api/telesales/get-telesales?page=${param?.page}&sort=${
            param?.searchQuery || ""
          }&limit=10`,
        }),
      }),
    }),
  });

export const { useGetTeleSalesQuery, useLazyGetTeleSalesQuery } =
  telesalesQueries;
