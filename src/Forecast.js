import axios from "axios";
import React, {useState, useEffect} from "react";
import './Forecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    } , [props.coordinates]);
   
    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    }

if (loaded) {
    return(
        <div className="Forecast">
            <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if (index < 5){
                return (
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                    </div>
                );
                } else {
                    return null;
                }
            })}    
        </div>
        </div>
    )
} else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey ="96c6ec35768d7fb6accd0167701b703c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)
    
    return null;

}
}