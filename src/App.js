import React, { useState } from "react";
import './App.css';
import { data } from './constant.js';

function App() {
  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contact, setContact] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [selectGender, setselectGender] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [tableData, setTableData] = useState("")

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeFatherName = (e) => {
    setfatherName(e.target.value)
  }
  const onChangeEmailId = (e) => {
    setEmailId(e.target.value)
  }
  const onChangeContact = (e) => {
    setContact(e.target.value)
  }
  const onChangeGender = (e) => {
    setselectGender(e.target.value);
    if (e.target.value === "All") {
      setTableData(data);
      return;
    }
    const boysData = data.filter((item) => item.gender === e.target.value);
    setTableData(boysData);
  };
  const onChangeSchoolName = (e) => {
    setSchoolName(e.target.value)
  }
  const onChangeDatejoining = (e) => {
    setjoiningDate(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const onChangeFeedback = (e) => {
    setFeedback(e.target.value)
  }
  const submitbtn = () => {
    if (name !== "" && fatherName !== "" && emailId !== "" && contact !== "" && schoolName !== "" && selectGender !== "" && feedback !== "" && joiningDate !== "" && address !== "") {
      console.log({ name }, { emailId }, { contact }, { schoolName }, { address }, { selectGender }, { feedback }, { joiningDate });
      alert("Student Added Successfully")
      clearbtn();
    } else {
      if (name === "") {
        alert("Please fill the name.");
      } else if (fatherName === "") {
        alert("Please Fill the Father's Name")
      } else if (emailId === "") {
        alert("Please fill the email.");
      } else if (contact === "") {
        alert("Please fill the number");
      } else if (selectGender === "") {
        alert("Please select the gender");
      } else if (address === "") {
        alert("Please fill the address");
      } else if (feedback === "") {
        alert("Please fill the feedback");
      } else if (joiningDate === "") {
        alert("Please fill the date");
      }
    }
  };
  const clearbtn = () => {
    setName("");
    setEmailId("");
    setselectGender("");
    setContact("");
    setAddress("");
    setFeedback("");
    setjoiningDate("");
  }

  return (
    <div >
      <h1>Add Student</h1>
      <h3>Name</h3>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => { onChangeName(e) }}></input>
      <h3>Father Name</h3>
      <input type="text" placeholder="Enter Name" value={fatherName} onChange={(e) => { onChangeFatherName(e) }}></input>
      <h3>Email Id</h3>
      <input type="text" placeholder="Email Id" value={emailId} onChange={(e) => { onChangeEmailId(e) }}></input>
      <h3>Contact Number</h3>
      <input type="text" placeholder="Contact Number" value={contact} onChange={(e) => { onChangeContact(e) }}></input>
      <h3>Gender</h3>
      <select value={selectGender} onChange={onChangeGender}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="All">All</option>
      </select>

      <h3>School Name</h3>
      <input type="text" placeholder="School Name" value={schoolName} onChange={(e) => { onChangeSchoolName(e) }}></input>
      <h3>Joining Date</h3>
      <input type="Date" value={joiningDate} onChange={(e) => { onChangeDatejoining(e) }}></input>
      <h3>Address</h3>
      <input type="text" placeholder="Address" value={address} onChange={(e) => { onChangeAddress(e) }}></input>
      <h3>Feedback</h3>
      <textarea rows="4" cols="50" text placeholder="Feedback" value={feedback} onChange={(e) => { onChangeFeedback(e) }}></textarea>
      <div>
        <button onClick={submitbtn}>Add Student</button>
      </div>
      <div>
        <button onClick={clearbtn}>Clear</button>
      </div>
    </div>

  );
}
export default App;
