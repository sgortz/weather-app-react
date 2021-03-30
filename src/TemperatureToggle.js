import React, { useState } from "react";
import "./TemperatureToggle.css"

function TemperatureToggle(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event){
      event.preventDefault();
      setUnit("Fahrenheit")
  }

  function showCelsius(event){
      event.preventDefault();
      setUnit("Celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureToggle">
        <span className="Temperature">{Math.round(props.celsius)}</span>
        <span className="TempUnits">
          ˚C|<a href="/" onClick="showFahrenheit">˚F</a>
        </span>
      </div>
    );
  } else {
      let fahrenheit = (props.celsius * 9/5) + 32;
    return (
      <div className="TemperatureToggle">
        <span className="Temperature">{Math.round(fahrenheit)}</span>
        <span className="TempUnits">
          <a href="/" onClick="showCelsius">
            ˚C
          </a>{" "}
          |˚F
        </span>
      </div>
    );
  }
}

export default TemperatureToggle;
