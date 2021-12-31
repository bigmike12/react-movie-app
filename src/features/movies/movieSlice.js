import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieTest = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIKEY}&s=${movieTest}&type=movie`
    );
    return response.data;
  }
);


export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesTest = "Friends";
    const response = await movieApi.get(
      `?apikey=${APIKEY}&s=${seriesTest}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    /* initializing actions */
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return {...state, movies: payload};
    },
    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return {...state, shows: payload};
    },
  },
});

export const { addMovies } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
