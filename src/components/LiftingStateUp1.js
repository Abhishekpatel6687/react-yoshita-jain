import React, { useState } from 'react'

const LiftingStateUp1 = (props) => {
    const [name, setName] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        // console.log(name)
        setName("")
        props.getData(name)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default LiftingStateUp1;
