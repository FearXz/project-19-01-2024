//slice reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  loadedSong: null,
  favourite: [],
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    // Azione definita nello slice
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setLoadedSong: (state, action) => {
      state.loadedSong = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourite = [...state.favourite, action.payload];
    },
    removeFavourite: (state, action) => {
      state.favourite = state.favourite.filter((song) => song.id !== action.payload);
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setSearchResult, setFavourite, setLoadedSong } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
