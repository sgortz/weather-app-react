import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./ForecastWeek.css";

function ForecastWeek(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <section>
        <ul className="ForecastWeek">
          <ForecastDay data={forecast[1]} />
          <ForecastDay data={forecast[2]} />
          <ForecastDay data={forecast[3]} />
          <ForecastDay data={forecast[4]} />
          <ForecastDay data={forecast[5]} />
          <ForecastDay data={forecast[6]} />
        </ul>
      </section>
    );
  } else {
    const apiKey = "730b5a562dc454244ed8e3e1a4518a7d";
    let lat = props.coords.lat;
    let lon = props.coords.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}

export default ForecastWeek;
