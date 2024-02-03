import React, { createContext } from 'react'
import UseContextHook2 from './UseContextHook2';

// What is useContext hook
// create, provider, useContext
// How to use it


const data = createContext()
const data1 = createContext()

const UseContextHook1 = () => {
  const name ="Abhishek"
  const lname ="Patel"
  return (
    <div>
    <data.Provider value={name}>
    <data1.Provider value={lname}>
      <UseContextHook2 />
    </data1.Provider>
    </data.Provider>
    </div>
  )
}

export default UseContextHook1;
export{data, data1}
