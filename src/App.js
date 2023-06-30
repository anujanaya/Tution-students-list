import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("Ashi");

  const OnChangeBtnClick = () => {
    setName("Anuja");
  };
  return (
    <div>
      <div className="Heading">
        Student List
      </div>
      <div>{name}</div>
      <button onClick={OnChangeBtnClick}>Change Name</button>
    </div>
  );
}

export default App;
