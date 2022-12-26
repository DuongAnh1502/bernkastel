import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    animeType: 1,
    isRandom: false,
};

const animeTypeSlice = createSlice({
    name: "animeType",
    initialState,
    reducers: {
        setSubType: (state, action) => {
            state.page = 1;
            state.animeType = action.payload;
        },
        nextPage: (state, action) => {
            state.page += action.payload;
        },
        prevPage: (state, action) => {
            if (state.page > 1) {
                state.page -= action.payload;
            }
        },
    },
});

export const { setSubType, nextPage, prevPage } = animeTypeSlice.actions;
export default animeTypeSlice.reducer;
