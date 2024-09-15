import { apiSlice } from "./apiSlice";

export const kycSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ["kyc1&2", "kyc3", "kyc4"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getKyc1_2: builder.query({
        query: () => ({
          url: "kyc/get-kyc1&2",
        }),
        providesTags: ["kyc1&2"],
      }),
      getUsdVerification: builder.query({
        query: () => ({
            url: "kyc/get-usd-account-creation-info"
        }),
        providesTags: ["UsdAccount"]
      }),
      getKyc3: builder.query({
        query: () => ({
          url: "kyc/get-kyc3",
        }),
        providesTags: ["kyc3"],
      }),
      getKyc4: builder.query({
        query: () => ({
          url: "kyc/get-kyc4",
        }),
        providesTags: ["kyc4"],
      }),
      verifyKyc1: builder.mutation({
        query: (id) => ({
          url: `kyc/verify1/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc1&2"],
      }),
      verifyKyc2: builder.mutation({
        query: (id) => ({
          url: `kyc/verify2/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc1&2"],
      }),
      verifyKyc3: builder.mutation({
        query: (id) => ({
          url: `kyc/verify3/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc3"],
      }),
      verifyKyc4: builder.mutation({
        query: (id) => ({
          url: `kyc/verify4/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc4"],
      }),
      verifyUsdAccount: builder.mutation({
        query: (id) => ({
            url: `kyc/verify-usd-account/${id}`,
            method: "PATCH",
        }),
        providesTags: ["UsdAccount"]
      }),
      declineKyc1_2: builder.mutation({
        query: (id) => ({
          url: `kyc/decline1&2/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc1&2"],
      }),
      declineKyc3: builder.mutation({
        query: (id) => ({
          url: `kyc/decline3/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc3"],
      }),
      declineKyc4: builder.mutation({
        query: (id) => ({
          url: `kyc/decline4/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["kyc4"],
      }),
      declineUsdAccount: builder.mutation({
        query: (id) => ({
            url: `kyc/decline-usd-account-creation/${id}`,
            method: "PATCH",
        }),
        providesTags: ["UsdAccount"]
      }),
    }),
  });

export const {
  useDeclineKyc1_2Mutation,
  useDeclineKyc3Mutation,
  useDeclineKyc4Mutation,
  useDeclineUsdAccountMutation,
  useGetKyc1_2Query,
  useGetUsdVerificationQuery,
  useGetKyc3Query,
  useGetKyc4Query,
  useVerifyKyc1Mutation,
  useVerifyKyc2Mutation,
  useVerifyKyc3Mutation,
  useVerifyKyc4Mutation,
  useVerifyUsdAccountMutation,
} = kycSlice;
