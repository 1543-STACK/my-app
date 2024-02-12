import React from "react";

//import Icon from "./Icon";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
  const maxTemp = Math.round(props.data.temp.max);
  const minTemp = Math.round(props.data.temp.min);

  const date = new Date(props.data.dt * 1000);
  const day = date.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="row days">
        <div className="col-2">{days[day]}</div>
      </div>
      <div className="row icons">
        <div className="col-2">
          {/*<Icon code={props.data.weather[0].icon} />*/}
        </div>
      </div>
      <div className="row temperature">
        <div className="col-2">
          <span className="min">{minTemp}°</span>/
          <span className="max">{maxTemp}°</span>
        </div>
      </div>
    </div>
  );
}
