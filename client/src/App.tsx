import React, { useState, useEffect } from 'react';
import { Map } from './Map';
import { getTaxis } from "./api";

const App: React.FunctionComponent = () => {
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

  const defaultCenter = {
    lat: 1.285194,
    lng: 103.8522982
  }

  return (
    <div className="App">
      <p>hello world</p>
      <Map taxis={driverData} center={defaultCenter}/>
    </div>
  );
}

export default App;
