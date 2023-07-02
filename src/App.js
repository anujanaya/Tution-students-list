import React, { useState, axios, useEffect } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");

  const url = 'https://jsonplaceholder.typicode.com/todos';
  
  useEffect(() => {
    axios.get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  });
  return (
    <div>
      <h3>Date</h3>
      <input type="date" value={date} onChange={onChangeDate}></input>
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

      <textarea rows="4" cols="50" text placeholder="Feedback" value={feedback} onChange={(e) => { onChangeFeedback(e) }}></textarea>
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
