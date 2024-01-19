//slice asyc function
import { setSearchResult } from "../reducers/stateReducer";
export const fetchSearch = (searchQuery) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    });

    if (response.ok) {
      const { data } = await response.json();
      dispatch(setSearchResult(data));
    } else {
      dispatch(setSearchResult(null));
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
