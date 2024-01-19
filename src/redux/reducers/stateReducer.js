//slice reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
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
    setFavourite: (state, action) => {
      state.favourite = [...state.favourite, action.payload];
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setSearchResult, setFavourite } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
