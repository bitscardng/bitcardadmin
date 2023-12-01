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
      getSingleUser: builder.query({
        query: (id) => ({
          url: `users/user-details/${id}`,
        }),
      }),
    }),
  });

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useLazyGetSingleUserQuery,
} = usersQueries;
