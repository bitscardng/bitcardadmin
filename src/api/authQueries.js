import { apiSlice } from "./apiSlice";

const usersQueries = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "auth/admin-login",
        method: "POST",
        body,
      }),
    }),
    createAdmin: builder.mutation({
      query: (body) => ({
        url: "auth/add-admin",
        method: "POST",
        body,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "auth/admin-logout",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `users/user`,
      }),
    }),
    validateOtp: builder.mutation({
      query: (body) => ({
        url: "auth/validate-admin-otp",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateAdminMutation,
  useLazyLogoutQuery,
  useGetUserQuery,
  useValidateOtpMutation,
} = usersQueries;
