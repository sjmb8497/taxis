import React from 'react';
import styled from 'styled-components';
import GoogleMapReact, { Coords } from 'google-map-react';
import { driverDataInterface, center } from '../helpers/interfaces'

type Props = {
    taxis: driverDataInterface;
    center: center;
};

const Marker = styled.div<Coords>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #3700ff;
`;

export const Map: React.FunctionComponent<Props> = ({ taxis, center }) => {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <GoogleMapReact
            // bootstrapURLKeys={{ key: "Insert key here" }}
            center={center}
            defaultZoom={14}
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
