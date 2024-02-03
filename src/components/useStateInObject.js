import React, { useState } from 'react'

const UseStateInObject = () => {
    const [allValue, setValue] = useState({fname:"Abhishek", lname:"Patel"})

    const update = () =>{
        // setValue({fname:"Ravi", lname:"Singh"})
        setValue({...allValue,fname:"Ravi"})
    }
    
  return (
    <div>
      <h1>My first name is {allValue.fname} and last name is {allValue.lname}</h1>
      <button onClick={()=>update()}>update</button>
    </div>
  )
}

export default UseStateInObject;
