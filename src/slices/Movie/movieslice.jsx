import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define your API endpoint and API key
const API_URL = 'http://api.themoviedb.org/3/movie/popular';
const API_KEY = 'f170712c1175f1d57306699daaa21704';

// Create an async thunk for fetching popular movies
export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY
        }
      });

      // Extract only id and poster_path from the response data
      return response.data.results.map(movie => ({
        id: movie.id,
        poster_path: movie.poster_path
      }));
    } catch (error) {
      throw error;
    }
  }
);

// Define the movies slice
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default moviesSlice.reducer;
