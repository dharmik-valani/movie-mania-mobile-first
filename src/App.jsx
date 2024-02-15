import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Movielists from "./pages/movie";
import MovieDetailspage from "./pages/movie-details";
import { MyContextProvider } from "./context/MyContext";
import Header from "./components/Header/Header.component";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movielists />} />
          <Route path="/movie/:id" element={<MovieDetailspage />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
