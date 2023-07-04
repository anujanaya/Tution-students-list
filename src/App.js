import React, { useState } from "react";
import './App.css';
import { data } from './constant.js';

function App() {
  const [gender, setGender] = useState("");
  const [tableData, setTableData] = useState([]);

  const onChangeGender = (e) => {
    setGender(e.target.value);
    if (e.target.value === "All") {
      setTableData(data);
      return;
    }
    const boysData = data.filter((item) => item.gender === e.target.value);
    setTableData(boysData);
  };
  const boysData = data.filter((item) => item.gender === "Male")
  const girlsData = data.filter((item) => item.gender === "Female")
  return (
    <div className="App" >
      <h1>Students List</h1>
      <h3>Select Students</h3>
      <select value={gender} onChange={onChangeGender}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="All">All</option>
      </select>
      <table>
        <h1>Boys Name List</h1>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
            </tr>
          )
        })}

      </table>


    </div>
  );
}

export default App;
