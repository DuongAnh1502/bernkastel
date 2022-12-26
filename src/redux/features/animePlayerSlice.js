import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentEpisode: 1,
    currentSever: "",
};

const animePlayerSlice = createSlice({
    name: "animePlayer",
    initialState,
    reducers: {
        setEpisode: (state, action) => {
            state.currentEpisode = action.payload;
        },
    },
});

export const { setEpisode } = animePlayerSlice.actions;
export default animePlayerSlice.reducer;
