import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campaignApiSlice = createApi({
  reducerPath: "campaign_api",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BITLY_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createCampaign: builder.mutation({
      query: (body) => ({
        url: `bitlinks`,
        method: "POST",
        body: {
          group_guid: process.env.REACT_APP_BITLY_ID,
          long_url: body.url,
          title: `${body.name},${body?.source},${body?.medium}`,
          description: `source:${body?.source}, medium:${body?.medium}`,
        },
      }),
    }),
  }),
});

export const { useCreateCampaignMutation } = campaignApiSlice;
