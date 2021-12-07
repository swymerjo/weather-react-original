import React from "react";
import FormattedDate from "./FormattedDate";
import './Weather.css';
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <div className="row overview">
        <h1>{props.data.city}</h1>
        <div className="col-sm-6">
        <ul className="description-list">
          <li>
            <FormattedDate date= {props.data.date}/>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      </div>
      <div className="row temperature-wrap">
        <div className="col-7 temperature-wrap">
          <div className="clearfix weather-temperature">
            <WeatherIcon code={props.data.icon} alt="" size={40}/>
            <WeatherTemperature celsius={props.data.temperature}/>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>
    )
}