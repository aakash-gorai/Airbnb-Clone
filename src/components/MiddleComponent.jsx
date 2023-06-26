import React from "react";
import PhotoGrid from "/images/photo-grid.png";

function MiddleComponent() {
  return (
    <>
      <div>
        <img className="photo--grid" src={PhotoGrid} alt="PhotoGrid" />
      </div>
      <div className="middle-text">
        <h1>Online Experiences</h1>
        <p className="middle-text-desc">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}

export default MiddleComponent;
