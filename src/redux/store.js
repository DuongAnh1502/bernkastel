import { configureStore } from "@reduxjs/toolkit";

import animeTypeSlice from "./features/animeTypeSlice";

import { gogoAnimeApi } from "./services/gogoAnimeApi";
import { aniListAnimeApi } from "./services/aniListApi";
import animePlayerSlice from "./features/animePlayerSlice";

export const store = configureStore({
    reducer: {
        [gogoAnimeApi.reducerPath]: gogoAnimeApi.reducer,
        animeType: animeTypeSlice,
        animePlayer: animePlayerSlice,
        [aniListAnimeApi.reducerPath]: aniListAnimeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(gogoAnimeApi.middleware)
            .concat(aniListAnimeApi.middleware),
});
