import React from 'react'

// const Props2 = (props) => {
//     console.log(props)
//     const {name} =props;
    // props.Lname = "ravi" //error== Cannot assign to read only property
    
    const Props2 = ({name,Lname}) => {
  return (
    <div>
    <h1>props2</h1>
    {/* <h1>{props.Lname}</h1> */}
      <h1>{name}</h1>
    <h1>{Lname}</h1>
    </div>
  )
}

export default Props2
