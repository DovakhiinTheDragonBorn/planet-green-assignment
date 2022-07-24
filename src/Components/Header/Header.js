import React from "react";
import "./Header.scss";
import mainLogo from "../../assets/roundLogo.png";

const Header = () => {
  return (
    <div className="Header">
      <img className="logoImage" src={mainLogo} />
      <hr className="horizontalLine" />
    </div>
  );
};

export default Header;
