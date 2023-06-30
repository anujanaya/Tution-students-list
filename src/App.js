import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [number, setNumber] = useState("");
 const[gender, setGender] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value)
    console.log(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailid(e.target.value)
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value)
  };
  const onChangeGender = (e) =>{
    setGender(e.target.value)
  };
  const submitbtn = () => {
    
  if(name!== "" && emailid!== "" && number!=="" && gender!=="" ){
    console.log({ name }, { emailid }, { number })
}else {
  alert("Please fill in all the fields.");
}};
  return (
    <div>
      <h3> Name</h3>
      <input text placeholder="Enter Name" value={name} onChange={(e) => { onChangeName(e) }}></input>
      <h3>Email Id</h3>
      <input text placeholder="Email Id" value={emailid} onChange={(e) => { onChangeEmail(e) }}></input>
      <h3>Contact Number</h3>
      <input number placeholder="Contact Number" value={number} onChange={(e) => { onChangeNumber(e) }}></input>
      <h3>Gender</h3>
      <select value={gender} onChange={onChangeGender}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <div>
        <button onClick={submitbtn}>Submit</button>
      </div>
    </div>
  );
}

export default App;
