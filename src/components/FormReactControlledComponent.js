import React, { useState } from 'react';

// Topics we will cover -
// 1 - React Form
// 2 - Controlled Component
// 3 - Uncontrolled Component
// ====================================

// it is controlled components

const FormReactControlledComponent = () => {
    const [state, setState] = useState("");
    const [Pass, setPass] = useState("");

    function handleChange(e) {
        // console.log(e.target.name)
        if(e.target.name === "firstName"){
            const capName = (e.target.value).toUpperCase()
            setState(capName)
        }else {
            setPass(e.target.value)
        }
       

    } 
    // function handlePass(e) {
    //     console.log(e.target.value)
    //      const capName =(e.target.value).toUpperCase();
        // setPass(capName)
    // }
  return (
    <div>
      <form>
      <label>First name: </label>
        <input type='text'name='firstName' value={state} onChange={handleChange} /><br/><br/>
        <label> Password: </label>
        <input type='text'name="pass" value={Pass} onChange={handleChange} />
      </form>
    </div>
  )
}
export default  FormReactControlledComponent;