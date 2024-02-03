import React, { useContext} from 'react';
import {data, data1} from "../components/UseContextHook1"

const UseContextHook3 = () => {
    const firstname= useContext(data)
    const lastname= useContext(data1)
  return (
    <div>
    <h1>my name is {firstname} {lastname}</h1>
    </div>
  )
}

export default UseContextHook3;
