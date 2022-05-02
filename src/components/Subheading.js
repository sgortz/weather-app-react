import React from "react";

export default function Subheading({ data }) {
  return (
    <ul className="SubHeading">
      <li>
        <strong>{data.description}</strong>
      </li>
      <li>
        Feels like <strong>{Math.round(data.feelsLike)}˚</strong>
      </li>
      <li>
        Hi-Lo <strong> {Math.round(data.temperatureHigh)}˚</strong>|{" "}
        {Math.round(data.temperatureLow)}˚
      </li>
      <li>
        Humidity <strong>{data.humidity}%</strong>
      </li>
      <li>
        Wind Speed <strong>{Math.round(data.wind)}</strong> km/h
      </li>
    </ul>
  );
}
