import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gogoAnimeApi = createApi({
    reducerPath: "gogoAnimeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.consumet.org/anime/gogoanime",
    }),
    endpoints: (builder) => ({
        getTopAiringGogoAnime: builder.query({ query: () => "/top-airing" }),
        getRecentUpdatedAnime: builder.query({
            query: (args) => {
                const { animeType, page } = args;
                return {
                    url: `recent-episodes?page=${page}&type=${animeType}`,
                };
            },
        }),
        getAnimeInfo: builder.query({
            query: (animeId) => `/info/${animeId}`,
        }),
        getEpisodeLink: builder.query({
            query: (episodeId) => `/watch/${episodeId}`,
        }),
    }),
});

export const {
    useGetTopAiringGogoAnimeQuery,
    useGetRecentUpdatedAnimeQuery,
    useGetAnimeInfoQuery,
    useGetEpisodeLinkQuery,
} = gogoAnimeApi;
