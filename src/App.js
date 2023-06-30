import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState(" ");

  const OnChangeBtnClick = () => {
    };
  return (
    <div>
      <div>
        Name
      </div>
      <input text placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <div>
      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
