import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState(" ");

  const onChangeName = () => {
    };
    
  return (
    <div>
      <div>
        Name
      </div>
      <input text placeholder="Enter Name" value={name} onChange={(e)=>{onChangeName(e)}}></input>
      <div>
      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
