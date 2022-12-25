import { configureStore } from "@reduxjs/toolkit";

import { gogoAnimeApi } from "./services/gogoAnimeApi";
import { aniListAnimeApi } from "./services/aniListApi";

export const store = configureStore({
    reducer: {
        [gogoAnimeApi.reducerPath]: gogoAnimeApi.reducer,
        [aniListAnimeApi.reducerPath]: aniListAnimeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(gogoAnimeApi.middleware)
            .concat(aniListAnimeApi.middleware),
});
