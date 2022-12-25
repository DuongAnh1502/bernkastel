import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aniListAnimeApi = createApi({
    reducerPath: "aniListApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.consumet.org/meta/anilist",
    }),
    endpoints: (builder) => ({
        getTrendingAnime: builder.query({ query: () => "/trending" }),
    }),
});

export const { useGetTrendingAnimeQuery } = aniListAnimeApi;
