import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loader from "../../assets/Movies/loader.gif";
import Card from "../Card/Card.component";
import { fetchMovieDetails } from "../../slices/Movie/moviedetails";
import Button from "../Button/Button.component";
import Imagecomponent from "../Image/Image.component";

// Store movie images in an array

const MovieDetails = () => {
  const dispatch = useDispatch();
  const MovieDetails = useSelector(
    (state) => state.oneMoviedetails.moviesdetails
  );
  const loading = useSelector((state) => state.oneMoviedetails.loading);

  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  // Use the index to access the corresponding movie image

  return (
    <>
      {loading ? (
        <div className="h-[calc(100vh-60px)] flex items-center justify-center">
          <Imagecomponent src={loader} imageclassName={"w-[30%]"} />
        </div>
      ) : (
        <div>
          <div className="bg-[#746A64] text-white p-4 text-2xl mb-6 font-medium">
            {MovieDetails?.title}
          </div>
          <div className="mx-6">
            <div className="flex">
              <Imagecomponent
                src={`https://image.tmdb.org/t/p/w185/${MovieDetails?.poster_path}`}
                alttext={`Movie ${id}`}
                imageclassName={"w-[115px] h-[170px]"}
              />
              <div className="ml-3 w-full">
                <div className="text-xl">{MovieDetails?.release_date}</div>
                <div className="italic text-[14px]">
                  {MovieDetails?.runtime} min
                </div>
                <div className="my-5 text-[#212121] font-bold	">
                  {MovieDetails?.vote_average}/10
                </div>
                <Button
                  text={"Add to Favorite"}
                  buttonclassName={"bg-[#746A64] p-4 w-full"}
                  textclassName={"text-white text-[16px]"}
                />
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
