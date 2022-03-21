import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const[inputValue, setInputValue]=React.useState("");
  
  const addEmp=()=>{
    const payload ={
      name:inputValue,

    }

    const payloadjson=JSON.stringify(payload);

    fetch('http://localhost:3001/Employees',{
      method:"POST",
      body:payloadjson,
      headers:{
        "content-type":"application/json"
      }
    })
  };

  return (
    <div className="App">
      <input placeholder="Name"></input><br/>
      <input placeholder="Gender"></input><br/>
      <input placeholder="Department"></input><br/>
      <input placeholder="Role"></input><br/>
      <input placeholder="Salary"></input><br/>
      <button onClick={addEmp}>ADD EMPLOYEE</button>
      <hr></hr>
      <button>Show All Department</button>
      <button>Show Mareting</button>
      <button>Show HR</button>
      <button>Show IT</button>
      <button>Show Finance</button><br/>
      
      <button>Sort By Salary Ascending</button>
      <button>Sort By Salary Descending</button>
    </div>
  );
}

export default App;
