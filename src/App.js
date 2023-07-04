import React from "react";
import './App.css';

function App() {
  const data = [
    { name: "Anom", age: 19, gender: "Male", email: "anom@gmail.com" },
    { name: "Subham", age: 25, gender: "Male", email: "subham@gmail.com" },
    { name: "Subhajit", age: 50, gender: "Male", email: "subhajit@gmail.com" },
    { name: "Subham", age: 15, gender: "Male", email: "subham@gmail.com" },
    { name: "Megha", age: 19, gender: "Female", email: "megha@gmail.com" },
    { name: "Anuja", age: 39, gender: "Female", email: "anuja@gmail.com" },
    { name: "Meghna", age: 49, gender: "Female", email: "meghna@gmail.com" },
    { name: "Megha", age: 64, gender: "Female", email: "megha@gmail.com" },
  ]
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
