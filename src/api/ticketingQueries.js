import { testApiSlice } from "./apiSlice";

export const tikcetingSlice = testApiSlice
  .enhanceEndpoints({ addTagTypes: ["tickets"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTickets: builder.query({
        query: (body) => ({
          url: `ticket/get-tickets?query=${body?.query}&limit=${body?.limit}&page=${body?.page}`,
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
      updateTicketStatus: builder.mutation({
        query: (body) => ({
          url: `ticket/${body?.ticketId}/status/${body?.status}`,
          method: "PUT",
        }),
      }),
      updateTicketPriority: builder.mutation({
        query: (body) => ({
          url: `ticket/${body?.ticketId}/priority/${body?.priority}`,
          method: "PUT",
        }),
      }),
    }),
  });

export const {
  useGetTicketByIdQuery,
  useGetTicketStatsQuery,
  useGetTicketsQuery,
  useReplyTicketMutation,
  useLazyGetTicketsQuery,
  useUpdateTicketPriorityMutation,
  useUpdateTicketStatusMutation,
} = tikcetingSlice;
