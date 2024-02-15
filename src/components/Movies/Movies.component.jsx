import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { fetchPopularMovies } from "../../slices/Movie/movieslice";
import { fetchMovieDetails } from "../../slices/Movie/moviedetails";
import Button from "../Button/Button.component";
import PlaceholderLoader from "../loader/PlaceholderLoader";

const Movies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const loading = useSelector((state) => state.movies.loading);

  // Divide movieImages array into subarrays with a maximum of two images each
  const dividedMovieImages = [];
  for (let i = 0; i < popularMovies.length; i += 2) {
    dividedMovieImages.push(popularMovies.slice(i, i + 2));
  }

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleClick = (id) => {
    dispatch(fetchMovieDetails(id));
    navigate(`/movie/${id}`);
  };

  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <>
      {loading ? (
        <div className="w-full">
          <PlaceholderLoader />
          <PlaceholderLoader />
          <PlaceholderLoader />
        </div>
      ) : (
        dividedMovieImages.map((subarray, index) => (
          <div key={index} className="flex w-full">
            {subarray.map((movie, subIndex) => (
              <div
                key={subIndex}
                className="relative w-1/2 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(movie)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`Movie ${index * 2 + subIndex + 1}`}
                  className="w-full"
                />
                {hoveredMovie && hoveredMovie.id === movie.id && (
                  <div className="opacity-0 transition-opacity duration-300 delay-300 hover:opacity-100  absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Button
                      text={"View Details"}
                      buttonclassName={
                        "border-amber-300 rounded-xl border-4 text-black py-2 px-4 rounded transition-opacity duration-300"
                      }
                      textclassName={"text-white "}
                      onClick={() => handleClick(movie.id)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </>
  );
};

export default Movies;
