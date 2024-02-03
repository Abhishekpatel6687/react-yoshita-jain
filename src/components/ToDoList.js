
import React, { useState } from "react";

const ToDoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  //   console.log(activity)

  function enterData(e) {
    setActivity(e.target.value);
  }

  function update() {
    setListData([...listData, activity]);
    console.log(listData);
    setActivity("");

    //     setListData((listData) => {
    //     const updatedList = [...listData, activity]
    //     console.log(updatedList)
    //     setActivity("")
    //     return updatedList;
    //   })
  }
  function DEL(i) {
    const update = listData.filter((elem, id) => {
      return i !== id;
    });
    return setListData(update);
  }

  // function AllDel() {
  //   setListData([]);
  // }
  return (
    <div>
      <div>
        <input type="text" value={activity} onChange={enterData} />
        <button onClick={update}>click</button>
      </div>
      <div>
        {listData.map((data, i) => {
          return (
            <div key={i}>
              <li>
                {data} <button onClick={() => DEL(i)}>rem</button>
              </li>
            </div>
          );
        })}

        {/* {listData.length >= 1 && <button onClick={AllDel}>AllDelete</button>} */}
      </div>
    </div>
  );
};

export default ToDoList;
