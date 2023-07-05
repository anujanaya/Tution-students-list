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
      <h1>Select Students</h1>

      <select value={selectGender} onChange={onChangeGender}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="All">All</option>
      </select>
      <div className="App" >
        <table>
          <tr>
            <th>Name</th>
          </tr>
          {tableData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}
export default App;
