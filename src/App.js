import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [number, setNumber] = useState("");
  
  const onChangeName = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailid(e.target.value)
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value)
  }
  const submitbtn = () => {
    alert("Hello")
  };

  return (
    <div>
      <h3> Name</h3>
      <input text placeholder="Enter Name" value={name} onChange={(e) => { onChangeName(e) }}></input>
      <h3>Email Id</h3>
      <input text placeholder="Email Id" value={emailid} onchange={(e) => { onChangeEmail(e) }}></input>
      <h3>Contact Number</h3>
      <input text placeholder="Contact Number" value={number} onchange={(e) => { onChangeNumber(e) }}></input>
      <div>
        <button onClick={submitbtn}>Submit</button>
      </div>
    </div>
  );
}

export default App;
