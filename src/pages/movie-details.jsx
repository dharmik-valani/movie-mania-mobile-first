import React from "react";
import { useNavigate } from "react-router-dom";
import MovieDetails from "../components/Movies-details/MovieDetails.component";
import Header from "../components/Header/Header.component";

const MovieDetailspage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
      };

  return (
    <>
      <Header text={"Movie details"} backbutton={true} onClick={()=>handleClick()} morebutton={true}/>
      <MovieDetails />
    </>
  );
};

export default MovieDetailspage;
