import React from "react";

function ForcustCard({ forcust }) {
  const { dt_txt } = forcust;
  const { humidity, temp } = forcust?.main;
  const { speed } = forcust?.wind;
  const { description } = forcust?.weather?.[0];
  return (
    <div className="forcust-card">
      <h1>Time: {dt_txt}</h1>
      <h2>TEMPARATURE: {temp}</h2>
      <h2>HUMIDITY: {humidity}</h2>
      <h2>WIND SPEED: {speed}</h2>
      <h2>{description}</h2>
    </div>
  );
}

export default ForcustCard;
