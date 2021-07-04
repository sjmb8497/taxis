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

  return (
    <div className="App">
      <p>hello world</p>
      <Map taxis={driverData} latitude={1.285194} longitude={103.8522982}/>
    </div>
  );
}

export default App;
