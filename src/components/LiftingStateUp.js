import React from 'react'
import LiftingStateUp1 from './LiftingStateUp1';

// child to data pass parent

const LiftingStateUp = () => {
    const reciveData = (data) => {
        console.log(data)
    }
  return (
    <div>
      <LiftingStateUp1 getData={reciveData}/>
    </div>
  )
}

export default LiftingStateUp;
