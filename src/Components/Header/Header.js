import React, { useState } from "react";
import "./Header.scss";
import mainLogo from "../../assets/roundLogo.png";

const Header = () => {
  const [rotate, setRotate] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  window.onscroll = () => {
    const theta = (document.documentElement.scrollTop / 50) % Math.PI;
    setRotate(theta);

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setProgressWidth(scrolled);
  };

  return (
    <div className="Header">
      <img
        id="logoImage"
        className="logoImage"
        src={mainLogo}
        style={{ transform: `rotate(${rotate}rad)` }}
      />
      <div className="progressContainer">
        <div
          className="progressBar"
          id="myBar"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
