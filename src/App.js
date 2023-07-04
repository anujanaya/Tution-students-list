import React from "react";
import './App.css';
import {data} from './constant.js';

function App() {
  const boysData = data.filter((item) => item.gender === "Male")
  const girlsData = data.filter((item) => item.gender === "Female")
  return (
    <div className="App" >

      <table>
        <h1>Boys Name List</h1>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
        {boysData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
            </tr>
          )
        })}
        <h2>Girls Name List</h2>
        {girlsData.map((val, key) => {
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
