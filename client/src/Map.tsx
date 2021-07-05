import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact, { Coords } from 'google-map-react';

type Props = {
    taxis: driverDataInterface;
    center: center;
};

interface center {
    lat: number;
    lng: number;
}
interface driver {
    driver_id: string;
    location: {
      latitude: number;
      longitude: number;
      bearing: number;
    };
  }
  
export interface driverDataInterface {
    pickup_eta: number;
    drivers: driver[];
}

const Marker = styled.div<Coords>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #3700ff;
`;

export const Map: React.FunctionComponent<Props> = ({ taxis, center }) => {
    const [zoom, setZoom] = useState(13);
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDha5iMRcmLfdQ-c4t7eu5dEoZXYGmVri4" }}
            center={center}
            defaultZoom={zoom}
            >
            {taxis.drivers.length && 
            taxis.drivers.map((taxi) => (
                <Marker
                    lat={taxi.location.latitude}
                    lng={taxi.location.longitude}
                />
            ))}
            </GoogleMapReact>
        </div>
    )
}
