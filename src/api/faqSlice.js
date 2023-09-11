import { apiSlice } from "./apiSlice";

export const faqSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ["faq", "faq/category"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getFaq: builder.query({
        query: () => ({
          url: "faq",
        }),
        providesTags: ["faq"],
      }),
      getFaqById: builder.query({
        query: (id) => ({
          url: `faq/${id}`,
        }),
        providesTags: ["faq"],
      }),
      getFaqCategory: builder.query({
        query: () => ({
          url: "faq/category",
        }),
        providesTags: ["faq/category"],
      }),
      updateFaqCategory: builder.mutation({
        query: (body) => ({
          url: `faq/category/${body.id}`,
          method: "PATCH",
          body: body.body,
        }),
        invalidatesTags: ["faq/category"],
      }),
      updateFaq: builder.mutation({
        query: (body) => ({
          url: `faq/${body.id}`,
          method: "PATCH",
          body: body.body,
        }),
        invalidatesTags: ["faq"],
      }),
      createFaq: builder.mutation({
        query: (body) => ({
          url: "faq",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["faq"],
      }),
      createFaqCategory: builder.mutation({
        query: (body) => ({
          url: "faq/category",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["faq"],
      }),
      deleteFaq: builder.mutation({
        query: (id) => ({
          url: `faq/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["faq"],
      }),
    }),
  });

export const {
  useGetFaqQuery,
  useGetFaqCategoryQuery,
  useCreateFaqCategoryMutation,
  useCreateFaqMutation,
  useUpdateFaqCategoryMutation,
  useUpdateFaqMutation,
  useGetFaqByIdQuery,
  useDeleteFaqMutation,
  useLazyGetFaqByIdQuery,
} = faqSlice;
