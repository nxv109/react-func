import React from "react";
import { WeatherItem } from "../../styles/elements";

export default function Weather({ weather }) {
  return (
    <WeatherItem>
      <div className="city">
        {weather.city === "Turan" ? "Danang" : weather.city} - {weather.country}
      </div>
      <div className="temp">
        {weather.temp}
        <sup>°C</sup>
      </div>
      <img
        className="icon"
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.icon}.svg`}
        alt="icon"
      />
      <div className="description">{weather?.description?.toUpperCase()}</div>
    </WeatherItem>
  );
}
