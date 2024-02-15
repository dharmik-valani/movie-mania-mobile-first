import React from "react";
import Header from "../components/Header/Header.component";
import Movies from "../components/Movies/Movies.component";

const Movielists = () => {
  return (
    <>
      <Header text={'Pop Movies'} morebutton={true} />
      <Movies/>
    </>
  );
};

export default Movielists;
