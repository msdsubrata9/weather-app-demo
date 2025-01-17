import React from "react";
import ForcustCard from "./ForcustCard";

function ForcustComponent({ forcustInfo }) {
  return (
    <div className="forcust-container">
      {forcustInfo.map((forcust) => (
        <ForcustCard key={forcust.dt} forcust={forcust} />
      ))}
    </div>
  );
}

export default ForcustComponent;
