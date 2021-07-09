import React, { useState, useEffect } from 'react';
import { Map } from './components/Map';
import { distance } from './helpers/distance';
import { locationInterface, driverDataInterface } from './helpers/interfaces'
import { getTaxis } from "./api";
import Slider from "@material-ui/core/Slider";

const App: React.FunctionComponent = () => {
  const [driverData, setDriverData] = useState<driverDataInterface>({
    pickup_eta: 1,
    drivers: [],
  });

  const [userLocation, setUserLocation] = useState<locationInterface>({
    lat: 51.5049375,
    lng: -0.0964509
  });

  const [center, setCenter] = useState<locationInterface>({
    lat: 51.5049375,
    lng: -0.0964509
  });

  const [numberOfDrivers, setNumberOfDrivers] = useState<number>(5);
  const [currentLocation, setCurrentLocation] = useState<string>('');

  const findCurrentLocation = (latitude: number, longitude: number) => {
    setUserLocation({lat: latitude,lng: longitude});

    const singaporeDistance = distance(userLocation.lat, userLocation.lng, 1.285194, 103.8522982);
    const londonDistance = distance(userLocation.lat, userLocation.lng, 51.5049375, -0.0964509);

    if (londonDistance < singaporeDistance) {
      setCurrentLocation('London');
    } else {
      setCurrentLocation('Singapore');
    }
  }

  const findClosestOffice = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        return findCurrentLocation(position.coords.latitude, position.coords.longitude);
      });
    }

  const changeCenter = () => {
    if (currentLocation === 'London') {
      setCurrentLocation('Singapore')
    } else {
      setCurrentLocation('London')
    }
  }

  const handleSlider = (event: any, newValue: any) => {
    setNumberOfDrivers(newValue);
  }

  useEffect(() => {
    async function fetch() {
      try {
        findClosestOffice();
        const data = await getTaxis(center.lat, center.lng, numberOfDrivers);
        setDriverData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
    const interval = setInterval(async () => {
      fetch()
    }, 5000);
    return () => clearInterval(interval);
  }, [center, numberOfDrivers])

  useEffect(() => {
    if (currentLocation === 'London') {
      setCenter({lat: 51.5049375, lng:-0.0964509})
    } else {
      setCenter({lat: 1.285194, lng:103.8522982})
    }
  }, [currentLocation])

  const marks = [
    {value: 0,label: '0'}, {value: 5,label: '5'}, {value: 10,label: '10'}, {value: 15,label: '15'}, {value: 20,label: '20'}
  ];

  return (
    <div className="App">
      <button onClick={() => changeCenter()}>Change location</button>
      <p>Change number of taxis:</p>
      <Slider
        defaultValue={numberOfDrivers}
        step={1}
        min={0}
        max={20}
        onChange={handleSlider}
        marks={marks}
      ></Slider>
      <Map taxis={driverData} center={center}/>
    </div>
  );
}

export default App;