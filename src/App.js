import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");

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
  const onChangeGender = (e) => {
    setGender(e.target.value)
  };
  const onChangeFeedback = (e) => {
    setFeedback(e.target.value)
  };
  const submitbtn = () => {
    if (name !== "" && emailid !== "" && number !== "" && gender !== "") {
      console.log({ name }, { emailid }, { number }, { gender });
      alert("Welcome" + " " + name)
    } else {
      if (name === "") {
        alert("Please fill the name.");
      } else if (emailid === "") {
        alert("Please fill the email.");
      } else if (number === "") {
        alert("Please fill the number");
      } else if (gender === "") {
        alert("Please select the gender");
      }
    }
  };
  const clearbtn = () => {
    setName("");
    setEmailid("");
    setGender("");
    setNumber("");
  }
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
      <h3>Feedback</h3>

      <input style={{ height: "50px" }} text placeholder="Feedback" value={feedback} onChange={(e) => { onChangeFeedback(e) }}></input>
      <div>
        <button onClick={submitbtn}>Submit</button>
      </div>
      <div>
        <button onClick={clearbtn}>Clear</button>
      </div>
    </div>
  );
}

export default App;
