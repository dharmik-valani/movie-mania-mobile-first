import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MoreIcon from "../../assets/Header/moreicon.svg";
import backicon from "../../assets/Header/backicon.svg";
import Imagecomponent from "../Image/Image.component";
import { MyContext } from "../../context/MyContext";

const Header = () => {
  const { state, setState } = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setState(false);
  };

  return (
    <div className="bg-[#212121] p-4 sticky top-0 z-10" >
      <div className="flex justify-between">
        <div className="flex">
          {state && (
            <Imagecomponent
              src={backicon}
              alttext={"back-arrow"}
              imageclassName={"mr-2 cursor-pointer"}
              onClick={() => handleClick()}
            />
          )}
          <div className="text-white text-xl">
            {state ? "Movie details" : "Pop Movies"}
          </div>
        </div>

        <Imagecomponent
          src={MoreIcon}
          alttext={"more-icon"}
          imageclassName={"cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default Header;
