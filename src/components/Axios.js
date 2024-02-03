import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setData(response.data);
    });
  },[]);
  return (
    <div>
      {/* <h1>{userdata.name[0]}</h1> */}
      {userdata.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
    </div>
  );
};

export default Axios;
