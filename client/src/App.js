import React, { useState, useEffect } from 'react';
import { getTaxis } from "./api";

function App() {
  const [driverData, setDriverData] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const data = await getTaxis();
        console.log('sophia')
        console.log('data', data)
        setDriverData(data);
        // console.log(driverData)
      } catch (err) {
        console.error(err);
      }
    }
    fetch()
  }, [])

  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
