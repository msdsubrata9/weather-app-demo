import React from "react";

function WeatherComponent({ weatherInfo }) {
  const { humidity, temp } = weatherInfo?.main;
  const { name } = weatherInfo;
  const { speed } = weatherInfo?.wind;
  return (
    <div>
      <h1>{name}</h1>
      <h2>TEMPARATURE: {temp}</h2>
      <h2>HUMIDITY: {humidity}</h2>
      <h2>WIND SPEED: {speed}</h2>
    </div>
  );
}

export default WeatherComponent;
