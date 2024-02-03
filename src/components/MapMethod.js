import React from 'react'
// rendering od List in React
// how map() works in react? 

// const IPL = [ "RCB","CSK", "MI", "RCB"]
const MapMethod = () => {
const list = [
    {
        id:3,
        name:"abhi",
        age:23
    },
    {
        id:5,
        name:"shiv",
        age:18
    },
    {
        id:9,
        name:"aman",
        age:20
    },
]


//   const data=  IPL.map((a) => <h1>{a}</h1>) // CSK MI RCB
//   const data=  IPL.map((a,index) => <h1 key={index}>{a}is{index}</h1>) // CSK MI RCB
//   const data=  IPL.map((a) => a) //CSKMIRCB
  return (
    <div>
      {/* <h1>{data}</h1> */}
    {
        list.map((item, index) =>{
            return(
           <div key={index}>
         <h3>{index}</h3>
            <h2>Name: {item.name}</h2> 
             <h3>Age: {item.age}</h3>
            </div>

            )
        } 
        )
    }
    </div>
  )
}

export default MapMethod;
