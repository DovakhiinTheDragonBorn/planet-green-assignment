import React from "react";

const TiltedImage = (props) => {
  const { image, angle } = props;
  return (
    <div className="TiltedImage">
      <img src={image} style={{ transform: `rotate(${angle})` }} />
    </div>
  );
};

export default TiltedImage;
