import React, { useRef } from "react";
// Topics we will cover -
// 1 - React Form
// 2 - Controlled Component
// 3 - Uncontrolled Component
// ====================================

    //  uncontrolled component to control directly control by Dom
    //  it is use to control by useRef
    // useRef hook it is directly DOM manuplate

    // class component me createRef()

const FormReactUncontrolledComponent = () => {
    const refObject = useRef();
    console.log(refObject)

    const handleSubmit = (e) => {
        e.preventDefault();
      console.log((refObject.current.value).toUpperCase())
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>First Name :</label>
      <input type="text" ref={refObject} />
      <button>Submit</button>
      </form>
    </div>
  );
};
export default FormReactUncontrolledComponent;
