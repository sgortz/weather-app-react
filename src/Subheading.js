import React from "react";

function Subheading(props) {
  return (
    <ul className="SubHeading">
      <li>
        <strong>{props.data.description}</strong>
      </li>
      <li>
        Feels like <strong>{Math.round(props.data.feelsLike)}˚</strong>
      </li>
      <li>
        Hi-Lo <strong> {Math.round(props.data.temperatureHigh)}˚</strong>|{" "}
        {Math.round(props.data.temperatureLow)}˚
      </li>
      <li>
        Humidity <strong>{props.data.humidity}%</strong>
      </li>
      <li>
        Wind Speed <strong>{Math.round(props.data.wind)}</strong> km/h
      </li>
    </ul>
  );
}

export default Subheading;
