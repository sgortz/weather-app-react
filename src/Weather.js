import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Subheading from "./Subheading";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);
  }
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
    search();
    return <h1> "Loading..."</h1>;
  }
}
