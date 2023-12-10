import { apiSlice } from "./apiSlice";

const usersQueries = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["users"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: (param) => ({
          url: `users?page=${param?.page}&sort=${
            param?.searchQuery || ""
          }&limit=10`,
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
  useLazyGetUsersQuery,
} = usersQueries;
