import { apiSlice } from "./apiSlice";

const usersQueries = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["users"],
  })
  .injectEndpoints({ endpoints: (builder) => ({}) });
