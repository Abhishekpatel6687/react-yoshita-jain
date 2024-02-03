import React, { useState } from "react";

const UseStateInArrays = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  function addData() {
    setItems([
      ...items,
      {
        id: 1,
        name: Math.random(),
      },
    ]);
  }

//   function addData() {
    
//     const newItem = {
//       id:items.length,
//       name: Math.random(),
//     };

//     setItems([...items, newItem]);
//   }

  return (
    <div>
      {items.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
      <button onClick={addData}>Add item</button>
    </div>
  );
};

export default UseStateInArrays;

// ==========================================================================================================================
