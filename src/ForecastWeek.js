import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./ForecastWeek.css";

function ForecastWeek(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);

    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <section>
        <ul className="ForecastWeek">
          <li>
            <WeatherIcon code={forecast.list[0].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>{Math.round(forecast.list[0].main.temp)}˚ | -99˚</div>
          </li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weather icon"
            />
            <div>Wednesday</div>
            <div>-99˚ | -99˚</div>
          </li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="weather icon"
            />
            <div>Thursday</div>
            <div>-99˚ | -99˚</div>
          </li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/13d@2x.png"
              alt="weather icon"
            />
            <div>Friday</div>
            <div>99˚ | -99˚</div>
          </li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/13d@2x.png"
              alt="weather icon"
            />
            <div>Saturday</div>
            <div>-99˚ | -99˚</div>
          </li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/13d@2x.png"
              alt="weather icon"
            />
            <div>Sunday</div>
            <div>-99˚ | -99˚</div>
          </li>
        </ul>
      </section>
    );
  } else {
    const apiKey = "730b5a562dc454244ed8e3e1a4518a7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}

export default ForecastWeek;
