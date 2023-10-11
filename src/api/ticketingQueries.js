import { testApiSlice } from "./apiSlice";

export const tikcetingSlice = testApiSlice
  .enhanceEndpoints({ addTagTypes: ["tickets"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTickets: builder.query({
        query: () => ({
          url: "ticket/get-tickets",
        }),
      }),
      getTicketStats: builder.query({
        query: () => ({
          url: "ticket/get-tickets-stats",
        }),
      }),
      getTicketById: builder.query({
        query: (body) => ({
          url: `ticket/get-ticket/${body.id}`,
        }),
      }),
    }),
  });

export const {
  useGetTicketByIdQuery,
  useGetTicketStatsQuery,
  useGetTicketsQuery,
} = tikcetingSlice;
