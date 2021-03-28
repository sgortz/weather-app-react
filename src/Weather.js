import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="SearchEngine">
          <label>
            <input type="text" placeholder="Type city here" />
          </label>
          <input type="submit" value="Submit" className="SearchButton" />
          <input
            type="submit"
            value="Current City"
            className="CurrentCityButton"
          />
        </form>
        <header className="Header">
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <h2>
            <FormattedDate date={weatherData.date} />
          </h2>
          <p className="TempInfo">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="Temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="TempUnits">
              <a href="/">˚C</a> |<a href="/">˚F</a>
            </span>
          </p>
        </header>
        <section>
          <ul className="SubHeading">
            <li>
              <strong>{weatherData.description}</strong>
            </li>
            <li>
              Feels like <strong>{Math.round(weatherData.feelsLike)}˚</strong>
            </li>
            <li>
              Hi-Lo <strong> {Math.round(weatherData.temperatureHigh)}˚</strong>
              | {Math.round(weatherData.temperatureLow)}˚
            </li>
            <li>
              Humidity <strong>{weatherData.humidity}%</strong>
            </li>
            <li>
              Wind Speed <strong>{Math.round(weatherData.wind)}</strong> km/h
            </li>
          </ul>
        </section>
        <section>
          <ul className="ForecastWeek">
            <li>
              <img
                src="http://openweathermap.org/img/wn/13d@2x.png"
                alt="weather icon"
              />
              <div>Tuesday</div>
              <div>99˚ | -99˚</div>
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
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);

    return <h1> "Loading..."</h1>;
  }
}
