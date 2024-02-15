import React from "react";
import MoreIcon from "../../assets/Header/moreicon.svg";
import backicon from "../../assets/Header/backicon.svg";
import Imagecomponent from "../Image/Image.component";

const Header = ({ text, backbutton, morebutton ,onClick}) => {


  return (
    <div className="bg-[#212121] p-4 sticky top-0 z-10" data-testid={text}>
      <div className="flex justify-between">
        <div className="flex">
          {backbutton && (
            <Imagecomponent
              src={backicon}
              alttext={"back-arrow"}
              imageclassName={"mr-2 cursor-pointer"}
              onClick={onClick}
            />
          )}
          <div className="text-white text-xl">{text}</div>
        </div>
        {morebutton && (
          <Imagecomponent src={MoreIcon} alttext={"more-icon"} imageclassName={"cursor-pointer"} />
        )}
      </div>
    </div>
  );
};

export default Header;
