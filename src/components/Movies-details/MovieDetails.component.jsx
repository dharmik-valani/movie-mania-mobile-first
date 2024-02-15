import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loader from '../../assets/Movies/loader.gif'
import Card from "../Card/Card.component";
import { fetchMovieDetails } from "../../slices/Movie/moviedetails";

// Store movie images in an array

const MovieDetails = ({ setIsMovieDetails }) => {
  const dispatch = useDispatch();
  const MovieDetails = useSelector(
    (state) => state.oneMoviedetails.moviesdetails
  );
  const loading = useSelector((state) => state.oneMoviedetails.loading);

  const { id } = useParams(); // Get the id parameter from the URL
  const movieIndex = parseInt(id) - 1; // Convert id to array index (assuming id starts from 1)

  useEffect(() => {
    setIsMovieDetails(true);
  }, []);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);


  // Use the index to access the corresponding movie image

  return (
    <>
      {" "}
      {loading ? (
        <div className="h-full flex items-center justify-center"><img src={loader} alt="" srcset="" className="w-[30%]"/></div>
      ) : (
        <div>
          <div className="bg-[#746A64] text-white p-4 text-2xl mb-6 font-medium">
            {MovieDetails?.title}
          </div>
          <div className="mx-6">
            <div className="flex">
              <img
                src={`https://image.tmdb.org/t/p/w185/${MovieDetails?.poster_path}`}
                alt={`Movie ${id}`}
                className="w-[115px] h-[170px]"
              />
              <div className="ml-3 w-full">
                <div className="text-xl">{MovieDetails?.release_date}</div>
                <div className="italic text-[14px]">
                  {MovieDetails?.runtime} min
                </div>
                <div className="my-5 text-[#212121] font-bold	">
                  {MovieDetails?.vote_average}/10
                </div>
                <button className="bg-[#746A64] p-4 w-full">
                  <span className="text-white text-[16px]">
                    Add to Favorite
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-4 text-[#757575] text-[14px] leading-[24px]">
              {MovieDetails?.overview}
            </div>
            <div className="mt-4">
              <div className="text-[#757575] text-[14px] leading-[24px] border-b-2  border-[#DEDEDE] pb-1">
                TRAILERS
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {[1, 2].map((index) => (
                  <div key={index}>
                    <Card index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
