import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState(" ");

return (
    <div>
      <div>
        Name
      </div>
      <input text placeholder="Enter Name"></input>
      <div>
      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
