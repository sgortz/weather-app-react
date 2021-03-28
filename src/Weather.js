import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Bemidji, US</h1>
        <h2>Monday, February 99, 99:99 AM</h2>
        <p className="TempInfo">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <span className="Temperature">99</span>
          <span className="TempUnits">
            <a href="/">˚C</a> |<a href="/">˚F</a>
          </span>
        </p>
      </header>
      <section>
        <ul className="SubHeading">
          <li>
            <strong>Clear Sky</strong>
          </li>
          <li>
            Feels like <strong>-99˚</strong>
          </li>
          <li>
            Hi-Lo <strong>99˚</strong>| -99˚
          </li>
          <li>
            Humidity <strong>99%</strong>
          </li>
          <li>
            Wind Speed <strong>99 km/h</strong>
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
}
