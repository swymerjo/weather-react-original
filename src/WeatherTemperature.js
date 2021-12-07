import React, {useState} from "react";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

if (unit ==="celsius") {
    return (
        <span>
             <strong>{Math.round(props.celsius)}</strong>
              <span className="units">
                °C | <a className="text-decoration-none" href="/" onClick={showFahrenheit}>°F</a>
              </span>
        </span>
    )
} else {
    let fahrenheit= (props.celsius * 9/5) + 32;
     return (
        <span>
             <strong>{Math.round(fahrenheit)}</strong>
              <span className="units">
              <a className="text-decoration-none" href="/" onClick={showCelsius}>°C</a> | °F
              </span>
        </span>
    )
}
}