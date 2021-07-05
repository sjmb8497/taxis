import React, { useState, useEffect } from 'react';
import { Map, driverDataInterface } from './Map';
import { getTaxis } from "./api";

const App: React.FunctionComponent = () => {
  const [driverData, setDriverData] = useState<driverDataInterface>({
    pickup_eta: 1,
    drivers: [],
  });
  interface locationInterface {
    lat: number;
    lng: number;
}
  const [userLocation, setUserLocation] = useState<locationInterface>({
    lat: 1.285194,
    lng: 103.8522982
  });

  const [center, setCenter] = useState<locationInterface>({
    lat: 1.285194,
    lng: 103.8522982
  });


  const distance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      return dist;
    }
  }

  const findClosestOffice = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log('userLocation', userLocation)
      })
    }
    const singaporeDistance = distance(userLocation.lat, userLocation.lng, 1.285194, 103.8522982);
    const londonDistance = distance(userLocation.lat, userLocation.lng, 51.5049375, -0.0964509);

    if (londonDistance < singaporeDistance) {
      setCenter({lat: 51.5049375, lng:-0.0964509})
    }
  }

  //find user location (long and lat)
  //find distance to singapore
  //find distance to london
  // if singapore distance < london distance, center = singapore long and lat
  // else center = london long and lat

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getTaxis();
        console.log('data', data)
        setDriverData(data);
        findClosestOffice();
      } catch (err) {
        console.error(err);
      }
    }
    fetch()
  }, [])

  return (
    <div className="App">
      <Map taxis={driverData} center={center}/>
    </div>
  );
}

export default App;
