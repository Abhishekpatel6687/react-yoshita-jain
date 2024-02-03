import React from 'react'

const Destructuring1 = (props) => {
// const Destructuring1 = ({fname,lname}) => {
    const {fname, lname} = props;
    // const a={fname:"ravi"}

  return (
    <div>
      {/* <h1>{at.fname} {at.lname}</h1> */}
      <h1>{fname} {lname}</h1>

    </div>
  )
}

export default Destructuring1;
