import { apiSlice } from "./apiSlice";

export const kycSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getKyc1_2: builder.query({
      query: () => ({
        url: "kyc/get-kyc1&2",
      }),
      providesTags: ["kyc1&2"],
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
    verifyKyc1_2: builder.mutation({
      query: (id) => ({
        url: `kyc/verify1&2/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc1&2"],
    }),
    verifyKyc3: builder.mutation({
      query: (id) => ({
        url: `kyc/verify3/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc3"],
    }),
    verifyKyc4: builder.mutation({
      query: (id) => ({
        url: `kyc/verify4/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc4"],
    }),
    declineKyc1_2: builder.mutation({
      query: (id) => ({
        url: `kyc/decline1&2/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc1&2"],
    }),
    declineKyc3: builder.mutation({
      query: (id) => ({
        url: `kyc/decline3/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc3"],
    }),
    declineKyc4: builder.mutation({
      query: (id) => ({
        url: `kyc/decline4/${id}`,
        method: "Patch",
      }),
      invalidates: ["kyc4"],
    }),
  }),
});

export const {
  useDeclineKyc1_2Mutation,
  useDeclineKyc3Mutation,
  useDeclineKyc4Mutation,
  useGetKyc1_2Query,
  useGetKyc3Query,
  useGetKyc4Query,
  useVerifyKyc1_2Mutation,
  useVerifyKyc3Mutation,
  useVerifyKyc4Mutation,
} = kycSlice;
