//slice reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstState: null,
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    // Azione definita nello slice
    setFirstState: (state, action) => {
      state.firstState = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setFirstState } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;

//vanilla reducer
/* export const FETCH_JOBS = "FETCH_JOBS";

export const fetchJobsAction = (url, query) => async (dispatch) => {
  try {
    const response = await fetch(url + query + "&limit=20");

    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: FETCH_JOBS, payload: data });
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {}
}; */
