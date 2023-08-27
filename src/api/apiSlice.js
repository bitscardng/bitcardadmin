import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BITSCARD_BACKEND_URL,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  sessionStorage.setItem("token", localStorage.getItem("refreshToken"));
  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "auth/admin-refresh",
      },
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      sessionStorage.setItem("token", refreshResult?.data?.accessToken);
      localStorage.setItem("refreshToken", refreshResult?.data?.refreshToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      //dispatch logout
      window.location.replace("/");
      toast.error("session timed out");
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
