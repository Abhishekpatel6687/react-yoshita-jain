import React, { useState } from "react";

const TodoLocalStorage1 = () => {
    const [Data, setData] = useState([]);
    setData([...Data])

    console.log(Data)
    function rem(i) {
        const update = Data.filter((elem, id) => {
          return i !== id;
        });
        return setData(update);
      }
  return (
    <div>
      <div>
        {Data.map((item, i) => {
          return (
            <div key={i}>
              <h1>
                {item.name}
                {item.age} {item.num}
                <button onClick={() => rem(i)}>rem</button>
                {/* <button onClick={edit}>edit</button> */}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoLocalStorage1;
