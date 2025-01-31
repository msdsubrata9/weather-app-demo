import React from "react";

function ForcustCard({ forcust }) {
  const { date, temperature, description, humidity, windSpeed } = forcust;

  return (
    <div className="forcust-card">
      <h1>Time: {date}</h1>
      <h2>TEMPERATURE: {temperature}</h2>
      <h2>HUMIDITY: {humidity}</h2>
      <h2>WIND SPEED: {windSpeed}</h2>
      <h2>{description}</h2>
    </div>
  );
}

export default ForcustCard;
