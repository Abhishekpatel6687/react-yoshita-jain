import React, { useState } from "react";

const State = () => {
  const [state, setState] = useState(0);
  const inc = () => {
    if (state < 10) {
      setState(state + 1);
    }
  };
  const dec = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };
  return (
    <div>
      <button onClick={inc}>++</button>
      <h2>{state}</h2>
      <button onClick={dec}>--</button>
    </div>
  );
};

export default State;
