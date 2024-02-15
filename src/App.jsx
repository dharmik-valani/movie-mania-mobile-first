import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movielists from "./pages/movie";
import MovieDetailspage from './pages/movie-details';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movielists />} />
          <Route path="/movie/:id" element={<MovieDetailspage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
