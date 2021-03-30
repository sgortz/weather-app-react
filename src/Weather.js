import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Subheading from "./Subheading";
import ForecastWeek from "./ForecastWeek";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "730b5a562dc454244ed8e3e1a4518a7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
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
          <input
            type="submit"
            value="Current City"
            className="CurrentCityButton"
          />
        </form>
        <Header data={weatherData} />
        <Subheading data={weatherData} />
        <ForecastWeek city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return <h1> "Loading..."</h1>;
  }
}
