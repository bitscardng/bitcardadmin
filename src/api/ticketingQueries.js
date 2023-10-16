import { testApiSlice } from "./apiSlice";

export const tikcetingSlice = testApiSlice
  .enhanceEndpoints({ addTagTypes: ["tickets"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTickets: builder.query({
        query: (body) => ({
          url: `ticket/get-tickets?limit=${body?.limit}&page=${body?.page}`,
        }),
        providesTags: ["tickets"],
      }),
      getTicketStats: builder.query({
        query: () => ({
          url: "ticket/get-tickets-stats",
        }),
        providesTags: ["tickets"],
      }),
      getTicketById: builder.query({
        query: (body) => ({
          url: `ticket/get-ticket/${body.id}`,
        }),
        providesTags: ["tickets"],
      }),
      replyTicket: builder.mutation({
        query: (body) => ({
          url: `ticket/admin-reply/${body?.id}`,
          body: { reply: body.reply },
          method: "POST",
        }),
        invalidatesTags: ["tickets"],
      }),
    }),
  });

export const {
  useGetTicketByIdQuery,
  useGetTicketStatsQuery,
  useGetTicketsQuery,
  useReplyTicketMutation,
  useLazyGetTicketsQuery,
} = tikcetingSlice;
