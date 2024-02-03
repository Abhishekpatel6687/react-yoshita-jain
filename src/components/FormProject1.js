import React, { useState } from "react";
import "../App.css";

// const FormProject1 = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");

//     const DataSubmit = ()=> {
//        if(name&&email&&pass){
//         // e.preventDefault()
//         alert("Mr/Mrs " + name + ", your form is submited")
//         setName("")
//         setEmail("")
//         setPass("")

//        }else{
//         alert("fill all field")
//        }

//     }

//   return (
//     <div className="container">
//       <div className="box1">
//         <div className="heading">
//           <h1>Registration Form</h1>
//         </div>
//         <form onSubmit={DataSubmit} className="form">
//           <label>First Name: </label>
//           <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name" />
//           <label>Email: </label>
//           <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your Email" />
//           <label>Password: </label>
//           <input type="password" name="pass" value={pass} onChange={(e)=> setPass(e.target.value)} placeholder="enter your password" />
//           <button>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

const data = [{ name: "", email: "", pass: "" }];
const FormProject1 = () => {
  const [state,setState] = useState(data);

  const update= (e) => {
       setState({...state, [e.target.name]:e.target.value})
   console.log(state)
  }

  const submit = () => {
    if(!state.name|| !state.email|| !state.pass){
        alert(state.name+" your form is sunmited")
    }else{
        alert("fill all field");
    }
  }
  return (
    <div className="container">
      <div className="box1">
        <div className="heading">
          <h1>Registration Form</h1>
        </div>
        <form className="form" onSubmit={submit}>
          <label>First Name: </label>
          <input type="text" name="name" value={state.name} onChange={update} />
          <label>Email: </label>
          <input type="email" name="email" value={state.email}  onChange={update}/>
          <label>Password: </label>
          <input type="password" name="pass" value={state.pass} onChange={update} />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default FormProject1;
