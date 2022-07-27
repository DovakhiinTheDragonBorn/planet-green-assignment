import React from "react";
import "./RoundButton.scss";

const RoundButton = (props) => {
  const { onClick, text } = props;

  return (
    <div onClick={onClick} className="roundButton">
      <div className="roundButtonCircle">
        <div className="roundButtonInternal">{text}</div>
      </div>
    </div>
  );
};

export default RoundButton;
