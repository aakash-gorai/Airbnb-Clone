import React from "react";
import Airbnb from "../public/images/airbnb-logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <img className="airbnb--logo" src={Airbnb} alt="AirbnbLogo" />
      </nav>
    </>
  );
}

export default Navbar;
