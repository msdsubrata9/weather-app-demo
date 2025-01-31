import React, { useState } from "react";
import { WEATHER_API, API_KEY, DAILY_WEATHER_API } from "../../utils/Constants";
import WeatherComponent from "./WeatherComponent";
import ForcustComponent from "./ForcustComponent";
import {
  transformForecastData,
  transformWeatherData,
} from "../../utils/DataTransformers";

function SearchComponent() {
  const [inputText, setInputText] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forcustInfo, setForcustInfo] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const weatherResponse = await fetch(
        `${WEATHER_API}?q=${inputText}&appid=${API_KEY}`
      );
      const forcustResponse = await fetch(
        `${DAILY_WEATHER_API}?q=${inputText}&appid=${API_KEY}`
      );
      const weatherData = await weatherResponse.json();
      const forcustData = await forcustResponse.json();

      const transformedWeatherData = transformWeatherData(weatherData);
      const transformedForecastData = transformForecastData(forcustData);

      setWeatherInfo(transformedWeatherData);
      setForcustInfo(transformedForecastData);
    } catch (e) {
      alert("Location not found" + e);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Search</button>
      {weatherInfo && <WeatherComponent weatherInfo={weatherInfo} />}
      {forcustInfo && <ForcustComponent forcustInfo={forcustInfo} />}
    </div>
  );
}

export default SearchComponent;
