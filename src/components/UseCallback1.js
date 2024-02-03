import React, { memo } from 'react'

const UseCallback1 = ({func,count}) => {
    console.log("UseCallback1")
  return (
    <div>
    <h1>UseCallback1</h1>
  {/* <h1>{count}</h1> */}
      
    </div>
  )
}

export default memo(UseCallback1);
