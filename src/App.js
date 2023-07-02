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
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
