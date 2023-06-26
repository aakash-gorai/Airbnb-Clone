import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.coverImg} className="card--img" />
      <div className="card--stats">
        <div className="card--stats-top">
          <img src="../images/star.png" className="star--img" />
          <span>{parseFloat(props.stats.rating)} </span>
          <span>({props.stats.reviewCount}) • </span>
          <span> {props.location} </span>
        </div>
        <p>{props.title}</p>
        <p>From {props.price} / person</p>
      </div>
    </div>
  );
}

export default Card;
