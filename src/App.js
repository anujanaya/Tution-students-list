import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("Ashi");
  return (
    <div>
      <div className="Heading">
        Student List{setName}
      </div>
      <div>{name}</div>
    </div>
  );
}

export default App;
