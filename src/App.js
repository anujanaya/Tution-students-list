import React, { useEffect } from "react";
import './App.css';
import axios from 'axios'
function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const getAxiosData = () => {
    axios.get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  useEffect(() => {
    getAxiosData();
  }, []);

  return (
    <div>
      <h1>Axios Heading</h1>
    </div>
  );
}

export default App;
