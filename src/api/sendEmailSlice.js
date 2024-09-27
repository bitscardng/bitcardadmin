import { apiSlice } from "./apiSlice";

export const sendEmailSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: ["send-email"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            send_bulk_email: builder.mutation({
                query: (body) => ({
                    url: "upload/send-bulk-email",
                    method: "POST",
                    body
                }),
            }),
        })
    })

    export const { useSend_bulk_emailMutation } = sendEmailSlice;
