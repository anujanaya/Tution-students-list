import React, { useState } from "react";
import './App.css';
import { data } from './constant.js';

function App() {
  const [selectGender, setselectGender] = useState("");
  const [tableData, setTableData] = useState([]);

  const onChangeGender = (e) => {
    setselectGender(e.target.value);
    if (e.target.value === "All") {
      setTableData(data);
      return;
    }
    const boysData = data.filter((item) => item.gender === e.target.value);
    setTableData(boysData);
  };

  return (
    <div >
<h1>Add Student</h1>
<h3>Name</h3>
<input type="text" placeholder="Enter Name"></input>
<h3>Father Name</h3>
<input type="text" placeholder="Enter Name"></input>
<h3>Email Id</h3>
<input type="text" placeholder="Email Id"></input>
<h3>Contact Number</h3>
<input type="text" placeholder="Contact Number"></input>
<h3>Gender</h3>
      <select value={selectGender} onChange={onChangeGender}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="All">All</option>
      </select>

      <h3>School Name</h3>
<input type="text" placeholder="School Name"></input> 
{/* <h3>Joining Date</h3>
<Date></Date> */}
<h3>Address</h3>
<input type="text" placeholder="Address"></input>

      </div>
    
  );
}
export default App;
