import React from "react";
import "./BottomSection.scss";
import { TiltedImage, BottomSectionText } from "../";
import Building1 from "../../assets/building1.jpg";
import Building2 from "../../assets/building2.jpg";

const BottomSection = () => {
  return (
    <div className="BottomSection">
      <div className="div-20">
        <TiltedImage image={Building1} angle="-20deg" />
      </div>
      <div className="div-40">
        <BottomSectionText />
      </div>
      <div className="div-20">
        <TiltedImage image={Building2} angle="20deg" />
      </div>
    </div>
  );
};

export default BottomSection;
