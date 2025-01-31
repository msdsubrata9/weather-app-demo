export const transformWeatherData = (data) => {
  if (!data || !data.weather) return null;

  return {
    city: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    windSpeed: data.wind.speed,
  };
};

export const transformForecastData = (data) => {
  if (!data || !data.list) return null;

  return data.list.map((item) => ({
    date: item.dt_txt,
    temperature: item.main.temp,
    description: item.weather[0].description,
    humidity: item.main.humidity,
    windSpeed: item.wind.speed,
  }));
};
