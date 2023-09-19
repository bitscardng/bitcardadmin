import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketApiSlice = createApi({
  reducerPath: "api/market",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_COINGECKO,
  }),
  endpoints: (builder) => ({
    getMarketRate: builder.query({
      query: () => ({
        url: "simple/price?ids=bitcoin,tether,usd&vs_currencies=usd&precision=2",
      }),
    }),
  }),
});

export const { useGetMarketRateQuery } = marketApiSlice;
