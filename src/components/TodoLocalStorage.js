
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TodoLocalStorage = () => {
  const [inputData, setInputData] = useState({ name: "", num: "" });
  const [Data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null)

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("TodoData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    
  }, [Data]);

  function handleInput(e) {
    if (e.target.name === "name") {
      setInputData({ ...inputData, name: e.target.value });
    } else {
      setInputData({ ...inputData, num: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.name === "" || inputData.num === "") {
      alert("Please fill in all fields");
    } else {
        if (editItem) {
        // If editing, update the existing item
            const updatedData = Data.map((item) =>
              item.id === editItem.id ? { ...item, inputData } : item
            );
            setData(updatedData);
            setEditItem(null);
        } else {
            //  If not editing, add a new item
      localStorage.setItem("TodoData", JSON.stringify([...Data, { id: uuidv4(), inputData }]));
      setData([...Data, { id: uuidv4(), inputData }]);
      console.log(Data);
    }
    setInputData({ name: "", num: "" });
  }
 };

  function rem(id) {
    const update = Data.filter((elem) => {
      return elem.id !== id;
    });
    return setData(update);
  }

  function Delete() {
    setData([]);
  }

  const edit = (id) => {
    const newEdit = Data.find((elem) => {
      return elem.id === id;
    })
    if(inputData.name === "" || inputData.num === "") {
      setInputData({ name: newEdit?.inputData?.name, num: newEdit?.inputData?.num });
      console.log(newEdit);
      setEditItem(newEdit);
      console.log(setEditItem)
    }
  };
  useEffect(()=>
  {
    console.log("jhad", inputData)
  }, [inputData])
  
  return (
    <div>
      <h1>Manage Contacts</h1>
      <div>
        <form>
          <h3> Name :</h3>
          <br />
          <input
            type="text"
            value={inputData?.name ?? ""}
            name="name"
            onChange={handleInput}
          />
          <h3> num :</h3>
          <br />
          <input
            type="text"
            value={inputData?.num ?? ""}
            name="num"
            onChange={handleInput}
          />
          <br />
          <br />
          {/* <button onClick={handleDelete}>AllDelete</button> */}
          <button onClick={handleSubmit}>click</button>
          <button onClick={Delete}>All DElete</button>
        </form>
      </div>

      <div>
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <h1>
                {item.inputData.name} {item.inputData.num}
                <button onClick={() => edit(item.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => rem(item.id)}>
                  <FaTrash />
                </button>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoLocalStorage;