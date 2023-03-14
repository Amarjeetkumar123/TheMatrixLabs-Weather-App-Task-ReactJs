import React from "react";

const Home = (props) => {
  const data = props.data;
  // console.log(data);
   const iconurl = "http://openweathermap.org/img/w/" + data.icon + ".png";
  return (
    <div id="home-container">
      {/* Navbar  start */}
      <div id="navbar">
        <ul id="list">
          <li>Home</li>
          <li>Cities</li>
          <li>News</li>
        </ul>
      </div>
      {/* Navbar end */}

      {/* Details Box start */}
      <div id="details-box">
        <ul class="details">
          <h2>Weather Details</h2>
          <li>
            <span>Cloudy</span>
            <span>{data.clouds}%</span>
          </li>
          <li>
            <span>Humidity</span>
            <span>{data.humidity}%</span>
          </li>
          <li>
            <span>Wind</span>
            <span>{data.wind}km/h</span>
          </li>
        </ul>
      </div>

      {/* Details Box end  */}

      {/* Temperature and city details start */}

      <div id="temp-details">
        <div>
          <h1 class="temp">{parseInt(data.temp )}&#176;</h1>
          <div class="city-time">
            <h1 class="name">{ data.name}</h1>
            <small>
              <span class="time">06:09</span>
              <span class="date">15/03/2023</span>
            </small>
          </div>
        </div>
        <div class="weather">
          <img
            src={iconurl}
            alt="icon"
            class="icon"
            width="50"
            height="50"
          />
        </div>
      </div>

      {/* Temperature and city details end */}
    </div>
  );
};

export default Home;
