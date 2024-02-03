import React, { useMemo, useState } from 'react'
// what is useMemo and why we use it
// How to use useMemo with example

const UseMemo = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    // function multiply(){
    //     console.log("*******************")
    //     return add*10;
    // }
    const multiplication = useMemo(function multiply(){
        console.log("*******************")
        return add*10;
    }, [add])
  return (
    <div>
    <h1>Learning useMemo</h1>
    {multiplication}<br/><br/>
    <button onClick={()=> setAdd(add +1)}>Addition</button>
    <span>{add}</span><br/><br/>
    <button onClick={()=> setMinus(minus - 1)}>Substration</button>
    <span>{minus}</span>
      
    </div>
  )
}

export default UseMemo
