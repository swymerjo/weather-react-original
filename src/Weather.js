import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready:true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt*1000),
      city:response.data.name
    });
  }

  function search(){
    const apiKey ="96c6ec35768d7fb6accd0167701b703c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
  search();
  }

  function handleCityChange(event){
  setCity(event.target.value);
  }

 if (weatherData.ready) {
  return (
    <div className="app-outer">
    <div className="Weather shadow">
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control shadow p-2"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-sm-4">
           <button className= "submit-button shadow w-100">
               Submit
           </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>
    </div>
    </div>
  );
 } else {
   search();
  return "Loading...";
 }
}