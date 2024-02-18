import { apiSlice } from "./apiSlice";

export const P2pSlice = apiSlice
.enhanceEndpoints({ addTagTypes: ["get-escrow-list", "get-p2ptransactions"] })
.injectEndpoints({
    endpoints: builder => ({
        getEscrowList: builder.query({
            query: () => ({
                url: "p2p/get-escrow-list"
            }),
            providesTags: ['get-escrow-list']
        }),
        getTransactionList: builder.query({
            query: () => ({
                url: "p2p/get-p2ptransactions"
            }),
            providesTags: ['get-p2ptransactions']
        })
    })
})

export const {
    useGetEscrowListQuery, 
    useGetTransactionListQuery
} = P2pSlice;