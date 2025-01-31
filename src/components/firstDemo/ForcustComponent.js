import React from "react";
import ForcustCard from "./ForcustCard";
// how do we render a large list?
// implement transformers

function ForcustComponent({ forcustInfo }) {
  console.log(forcustInfo);
  return (
    <div className="forcust-container">
      {forcustInfo.map((forcust) => (
        <ForcustCard key={forcust.date} forcust={forcust} />
      ))}
    </div>
  );
}

export default ForcustComponent;
