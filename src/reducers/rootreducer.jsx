import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../slices/Movie/movieslice';
import moviedetailsReducer from '../slices/Movie/moviedetails';

const rootReducer = combineReducers({
  movies: movieReducer,
  oneMoviedetails:moviedetailsReducer,
  // Add more reducers here if needed
});

export default rootReducer;
