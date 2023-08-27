import { apiSlice } from "./apiSlice";

const usersQueries = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["users"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => ({
          url: "users",
        }),
      }),
      getUser: builder.query({
        query: (id) => ({
          url: `users/${id}`,
        }),
      }),
    }),
  });

export const { useGetUsersQuery, useGetUserQuery } = usersQueries;
