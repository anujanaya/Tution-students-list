import React from "react";
import './App.css';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
  { name: "Anuja", age: 39, gender: "Female" },
  { name: "Meghna", age: 49, gender: "Female" },
  { name: "Subhajit", age: 50, gender: "Male" },
  { name: "Megha", age: 64, gender: "Female" },
  { name: "Subham", age: 15, gender: "Male" },

]
function App() {
  return (
    <div className="App" >
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>


    </div>
  );
}

export default App;
