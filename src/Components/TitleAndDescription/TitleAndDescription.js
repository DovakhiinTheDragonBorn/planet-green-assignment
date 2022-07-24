import React from "react";
import "./TitleAndDescription.scss";

const TitleAndDescription = (props) => {
  const { title, description } = props;
  return (
    <div className="TitleAndDescription">
      <p className="Title">{title}</p>
      <p className="Description">{description}</p>
      <hr className="DottedLine" />
    </div>
  );
};

export default TitleAndDescription;
