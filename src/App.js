import React, { useState } from "react";
import './App.css';
import { data } from './constant.js';

function App() {
const[selectGender, setselectGender] = useState("");

const onChangeGender = (e)=>{
  setselectGender(e.target.value);
}
  return (
    <div className="App" >
      <table>
        <h1>Students List</h1>
        <tr>
          <th>Name</th>

        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
            </tr>
          )
        })}

      </table>
    </div>
  );
}
export default App;
