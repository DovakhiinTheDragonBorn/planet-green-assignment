import React from "react";
import "./TopTextAndImage.scss";

const TopTextAndImage = (props) => {
  const { text, image } = props;
  return (
    <div className="TopTextAndImage">
      <img className="Image" src={image} />
      <p className="Text">{text}</p>
    </div>
  );
};

export default TopTextAndImage;
