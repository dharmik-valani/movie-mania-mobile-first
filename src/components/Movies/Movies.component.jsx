import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"; // Import Link from react-router-dom
import NewMovies from "../../assets/Movies/New-movie.jpg";
import { fetchPopularMovies } from "../../slices/Movie/movieslice";
import { fetchMovieDetails } from "../../slices/Movie/moviedetails";

const movieImages = [
  NewMovies,
  NewMovies,
  NewMovies,
  NewMovies,
  NewMovies,
  NewMovies,
];

const Movies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  // Divide movieImages array into subarrays with a maximum of two images each
  const dividedMovieImages = [];
  for (let i = 0; i < popularMovies.length; i += 2) {
    dividedMovieImages.push(popularMovies.slice(i, i + 2));
  }

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);


  const handleClick = (id) => {
    console.log(id)
    dispatch(fetchMovieDetails(id))
    navigate(`/movie/${id}`);
  };

  return (
    <>
      {dividedMovieImages.map((subarray, index) => (
        <div key={index} className="flex w-full">
          {subarray.map((movie, subIndex) => (
                <img
                  key={subIndex}
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`Movie ${index * 2 + subIndex + 1}`}
                  className="w-1/2"
                  onClick={()=>handleClick(movie.id)}
                />
          ))}
        </div>
      ))}
    </>
  );
};

export default Movies;
