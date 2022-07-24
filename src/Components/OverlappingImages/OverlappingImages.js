import React from "react";
import "./OverlappingImages.scss";

const OverlappingImages = (props) => {
  const { image1, image2 } = props;
  return (
    <div class="OverlappingImages">
      <div class="imageStack">
        <div class="imageStackItemTop">
          <img src={image1} alt="" />
        </div>
        <div class="imageStackItemBottom">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OverlappingImages;
