import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gogoAnimeApi = createApi({
    reducerPath: "gogoAnimeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.consumet.org/anime/gogoanime",
    }),
    endpoints: (builder) => ({
        getTopAiringGogoAnime: builder.query({ query: () => "/top-airing" }),
        getRecentUpdatedAnime: builder.query({
            query: () => "recent-episodes",
        }),
    }),
});

export const { useGetTopAiringGogoAnimeQuery, useGetRecentUpdatedAnimeQuery } =
    gogoAnimeApi;
