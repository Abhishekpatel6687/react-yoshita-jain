import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
    const data= {fname:"", lname:"", email:"",number:""}

    const [inputData, setInputData] = useState(data)

    function handleData(e){
        setInputData({...inputData, [e.target.name]: e.target.value})
        // console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
         axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
    console.log(response)
   })
 }

 const HandleUpdate = (e) => {
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
    .then((response)=>{
console.log(response)
})
 }

 const HandleDelete = (e) =>{
e.preventDefault();
axios.delete("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
console.log(response)
})

 }
  return (
    <>
    <form>
        <label>First Name :</label>
        <input type='text' name='fname' value={inputData.firstName} onChange={handleData}/><br/><br/>
        <label>Lase Name :</label>
        <input type='text' name='lname' value={inputData.lname} onChange={handleData}/><br/><br/>
        <label>Email :</label>
        <input type='email' name='email' value={inputData.email} onChange={handleData}/><br/><br/>
        <label>Number :</label>
        <input type='number' name='number' value={inputData.number} onChange={handleData}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={HandleUpdate}>update</button>
        <button onClick={HandleDelete}>Delete</button>
    </form>
      
    </> 
  )
}

export default AxiosPost;
