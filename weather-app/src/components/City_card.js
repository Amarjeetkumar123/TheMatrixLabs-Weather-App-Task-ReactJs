import React from "react";
// import image from "../images/clear.jpg"
const City_card = (props) => {
  return (
    <div className="card">
      <div id="card-img">
        <img src={props.image} alt="img" />
        <h3 id="city-condition">{props.name}</h3>
      </div>

      <div id="card-content">
        <h1>
          {props.temp}
          <sup>&#176;</sup>
        </h1>
        <div>
          <h3>{props.cityname}</h3>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default City_card;
