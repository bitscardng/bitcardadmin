import { apiSlice } from "./apiSlice";

export const newsSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ["news", "news/category"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getNews: builder.query({
        query: () => ({
          url: "news",
        }),
        providesTags: ["news"],
      }),
      getNewsById: builder.query({
        query: (id) => ({
          url: `news/${id}`,
        }),
        providesTags: ["news"],
      }),
      getNewsCategory: builder.query({
        query: () => ({
          url: "news/category",
        }),
        providesTags: ["news/category"],
      }),
      updateNewsCategory: builder.mutation({
        query: (body) => ({
          url: `news/category/${body.id}`,
          method: "PATCH",
          body: body.body,
        }),
        providesTags: ["news/category"],
      }),
      updateNews: builder.mutation({
        query: (body) => ({
          url: `news/${body.id}`,
          method: "PATCH",
          body: body.body,
        }),
        invalidatesTags: ["news"],
      }),
      createNews: builder.mutation({
        query: (body) => ({
          url: "news",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["news"],
      }),
      createCategory: builder.mutation({
        query: (body) => ({
          url: "news/category",
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["news"],
      }),
      deleteNews: builder.mutation({
        query: (id) => ({
          url: `news/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["news"],
      }),
    }),
  });

export const {
  useGetNewsQuery,
  useGetNewsCategoryQuery,
  useCreateCategoryMutation,
  useCreateNewsMutation,
  useUpdateNewsCategoryMutation,
  useUpdateNewsMutation,
  useGetNewsByIdQuery,
  useDeleteNewsMutation,
  useLazyGetNewsByIdQuery,
} = newsSlice;
