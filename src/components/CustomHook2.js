import React from 'react'
import useCustomHook1 from './useCustomHook1';

const CustomHook2 = () => {
    const [count, Increment, Decrement] = useCustomHook1()  //Destructing of array
  return (
    <div> 
       <h2>{count}</h2>
       <button onClick={Increment}>add</button>
       <button onClick={Decrement}>sub</button>
    </div>
  )
}

export default CustomHook2;
