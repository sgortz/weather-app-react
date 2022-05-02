import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Header from "./Header.js";
import Subheading from "./Subheading.js";
import ForecastWeek from "./ForecastWeek.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "730b5a562dc454244ed8e3e1a4518a7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(handleResponse);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      temperatureHigh: response.data.main.temp_max,
      temperatureLow: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //handling user adding state into form
  function updateCity(event) {
    if (event.target.value.includes(',')) {
      let index = event.target.value.indexOf(',');
      let cityName = event.target.value.substring(0, index);
      setCity(cityName);
    } else {
      setCity(event.target.value);
    }
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="SearchEngine" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Type city here"
              onChange={updateCity}
            />
          </label>
          <input type="submit" value="Submit" className="SearchButton" />
        </form>
        <Header data={weatherData} />
        <Subheading data={weatherData} />
        <ForecastWeek coords={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <h1> "Loading..."</h1>;
  }
}
