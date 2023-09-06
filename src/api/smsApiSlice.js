import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const smsApiSlice = createApi({
  reducerPath: "sms_api",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SMS_URL,
  }),
  endpoints: (builder) => ({
    single_sms: builder.mutation({
      query: (body) => ({
        url: "sms",
        method: "POST",
        body: {
          recipients: body.phone,
          message: body.message,
          senderID: "BITSCARD",
          token:
            "QStzYR5eZ3kGaIgOLVx09wEAPscB27fmrHM1TnlNCoJuiDvdyK4bpjF68XqUhW",
        },
      }),
    }),
  }),
});

export const { useSingle_smsMutation } = smsApiSlice;
