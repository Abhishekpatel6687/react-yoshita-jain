import React from 'react'
import CustomHook1 from './useCustomHook1';

const CustomHook = () => {
    const [count, Increment, Decrement] = CustomHook1()  //Destructing of array
  return (
    <div> 
       <h2>{count}</h2>
       <button onClick={Increment}>add</button>
       <button onClick={Decrement}>sub</button>
    </div>
  )
}

export default CustomHook;
