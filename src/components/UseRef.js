import React, { useRef, useState } from 'react'
// what is useRef = dom manipulate
// How to use it
const UseRef = () => {
    const refElemen = useRef("")
    const [state, setState] = useState("PATEL")
    console.log(refElemen)

//     const update = (e) => {
//   state(e.target.value)
//     }

function reset(){
setState("")
refElemen.current.focus()
}
const handleInput =() =>{
refElemen.current.style.color="blue"
refElemen.current.value="ABHISHEK"
}
  return (
    <div>
      <h1>useRef</h1>
      <h1>{state}</h1>
    <input ref={refElemen} type="text" value={state} onChange={(e)=>setState(e.target.value)} />
    {/* <input type="text" onChange={(e)=>setState(e.target.value)} /> */}
    <button onClick={reset}>Reset</button>
    <button onClick={handleInput}>color</button>
    </div>
  )
}

export default UseRef
