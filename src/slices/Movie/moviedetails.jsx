// movieslice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_MOVIE_URL;

// Create an async thunk for fetching movie details
export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async  (movieId, thunkAPI) => {
    try {
      const token = process.env.REACT_MOVIE_AUTHORIZATION_TOKEN;
      const response = await axios.get(`${API_URL}/${movieId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const moviedetailsSlice = createSlice({
  name: 'oneMoviedetails',
  initialState: {
    moviesdetails : null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesdetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moviedetailsSlice.reducer;
