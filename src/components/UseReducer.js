import React, { useReducer } from "react";
// useReducer hook  is under of Additional hoook

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
     return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
    <h2>count = {count}</h2>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
};

export default UseReducer;
