import React, { createContext } from 'react'
import ContextAPI2 from './ContextAPI2';

// What is contextAPI
// create, provider, consumer
// How to use it
// is context api also problematic === useContext hook

const data =createContext()
const data1 =createContext()
const ContextAPI1 = () => {
  const name = "ABHISHEK"
  const gender = "male"
  return (
    <div>
    <data.Provider value={name}>
    <data1.Provider value={gender}>
     <ContextAPI2 />
    </data1.Provider>
    </data.Provider>

    </div>
  )
}

export default ContextAPI1;
export{data, data1};
