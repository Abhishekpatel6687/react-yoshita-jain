import React, {  useCallback, useState } from 'react'
import UseCallback1 from './UseCallback1';

// whait is useCallback and why we use it 
// How to use useCallback with example
const UseCallback = () => {

    const [state, setState] = useState(0)
   const [ count, setCount] = useState(10)

    const Learning =useCallback( ( ) => {
        // some opration
    },[count])
  return (
    <div>  
      <h1>UseCallback</h1>
      <h2>{state}</h2>
      <UseCallback1 func={Learning} count={count}/>
      <button onClick={() => setState(state+1)}> click add</button><br/><br/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+2)}> click count</button>

    </div>
  )
}

export default UseCallback;
