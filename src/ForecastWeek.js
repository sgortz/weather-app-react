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
            <WeatherIcon code={forecast.daily[0].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[0].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[0].temp.min)}˚
            </div>
          </li>
          <li>
            <WeatherIcon code={forecast.daily[1].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[1].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[1].temp.min)}˚
            </div>
          </li>
          <li>
            <WeatherIcon code={forecast.daily[2].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[2].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[2].temp.min)}˚
            </div>
          </li>
          <li>
            <WeatherIcon code={forecast.daily[3].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[3].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[3].temp.min)}˚
            </div>
          </li>
          <li>
            <WeatherIcon code={forecast.daily[5].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[5].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[5].temp.min)}˚
            </div>
          </li>
          <li>
            <WeatherIcon code={forecast.daily[6].weather[0].icon} size={40} />
            <div>Tuesday</div>
            <div>
              {Math.round(forecast.daily[6].temp.max)}˚ |{" "}
              {Math.round(forecast.daily[6].temp.min)}˚
            </div>
          </li>
        </ul>
      </section>
    );
  } else {
    const apiKey = "730b5a562dc454244ed8e3e1a4518a7d";
    let lat = props.data.latitude;
    let lon = props.data.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}

export default ForecastWeek;
