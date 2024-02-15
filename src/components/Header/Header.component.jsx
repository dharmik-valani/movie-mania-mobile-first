import React from "react";
import { useNavigate } from "react-router-dom";
import MoreIcon from "../../assets/Header/moreicon.svg";
import backicon from "../../assets/Header/backicon.svg";

const Header = ({ isMovieDetails, setIsMovieDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setIsMovieDetails(false);
  };

  return (
    <div className="bg-[#212121] p-4 sticky top-0 z-10">
      <div className="flex justify-between">
        <div className="flex">
          {isMovieDetails && (
            <img
              src={backicon}
              alt="back-arrow"
              className="mr-2 cursor-pointer"
              onClick={()=>handleClick()}
            />
          )}
          <div className="text-white text-xl">
            {isMovieDetails ? "Movie details" : "Pop Movies"}
          </div>
        </div>
        <img src={MoreIcon} alt="more icon" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
