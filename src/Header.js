import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureToggle from "./TemperatureToggle";
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
      <div className="TempInfo">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <TemperatureToggle celsius={props.data.temperature} />
      </div>
    </header>
  );
}

export default Header;
