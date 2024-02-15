import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootreducer.jsx'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Add any middleware or enhancers here
});

export default store;
