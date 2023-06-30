import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  return (
    <div>
      <div className="Heading">
        Student List
      </div>
      <div>Ashi</div>
    </div>
  );
}

export default App;
