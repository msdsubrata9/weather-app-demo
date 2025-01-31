import React from "react";

function WeatherComponent({ weatherInfo }) {
  if (weatherInfo.cod === "404") {
    return (
      <div>
        <h1>No weather information available!!!</h1>
        <h1>{weatherInfo.message}!!!</h1>
      </div>
    );
  }
  console.log("weather information: ", weatherInfo);
  const { city, humidity, temperature, windSpeed } = weatherInfo;
  return (
    <div>
      <h1>{city}</h1>
      <h2>TEMPERATURE: {temperature}</h2>
      <h2>HUMIDITY: {humidity}</h2>
      <h2>WIND SPEED: {windSpeed}</h2>
    </div>
  );
}

export default WeatherComponent;
