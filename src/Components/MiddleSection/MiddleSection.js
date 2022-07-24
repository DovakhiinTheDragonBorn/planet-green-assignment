import React, { useState } from "react";
import "./MiddleSection.scss";
import { TitleAndDescription, RoundButton, OverlappingImages } from "../";
import Building1 from "../../assets/building1.jpg";
import Building2 from "../../assets/building2.jpg";

const MiddleSection = () => {
  const [atBottom, setAtBottom] = useState(false);

  return (
    <div className="MiddleSection">
      <div className="div-40">
        <TitleAndDescription
          title="Lorem ipsum dolor sit amet, adipiscing elit."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum pharetra erat at efficitur. Etiam a quam urna. Aenean pulvinar nunc in mattis tincidunt"
        />
        <TitleAndDescription
          title="Lorem ipsum dolor sit amet, adipiscing elit."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum pharetra erat at efficitur. Etiam a quam urna. Aenean pulvinar nunc in mattis tincidunt"
        />
      </div>
      <div className="div-20">
        <RoundButton
          onClick={() => {
            if (atBottom) window.scrollTo(0, 0);
            else window.scrollTo(0, document.body.scrollHeight);
            setAtBottom(!atBottom);
          }}
          text={`Scroll ${atBottom ? "Up" : "Down"}`}
        />
      </div>
      <div className="div-40">
        <OverlappingImages image1={Building1} image2={Building2} />
      </div>
    </div>
  );
};

export default MiddleSection;
