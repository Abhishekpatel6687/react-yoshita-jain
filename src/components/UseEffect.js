import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count,setCount] = useState(0)
  const [state,setState] = useState("abhi")

  useEffect(() => {
    console.log("component mounted")
  },[count])

function updateCount(){
    setCount(count+1)
}
function updateState(){
    setState("Abhishek Patel")
}
//   useEffect(() => {
//     setTimeout(() => {
//             setState("abhishek patel")
//     },5000)
//   })
  return (
    <div>
      <button onClick={updateCount}>click</button>
      <h1>{count}</h1>
      <h1>{state}</h1>
      <button onClick={updateState}>click</button>
    </div>
  );
};

export default UseEffect;
