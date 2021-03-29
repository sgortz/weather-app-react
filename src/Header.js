import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

function Header(props) {
  return (
    <header className="Header">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <p className="TempInfo">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <span className="Temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="TempUnits">
          <a href="/">˚C</a> |<a href="/">˚F</a>
        </span>
      </p>
    </header>
  );
}

export default Header;
