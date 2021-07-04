import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

type Props = {
    taxis: any;
    center: center;
};

interface center {
    lat: number;
    lng: number;
}

const Marker = ({text}: any) => <div>{text}</div>;

export const Map: React.FunctionComponent<Props> = ({ taxis }) => {
    const [center, setCenter] = useState({lat: 1.285194, lng: 103.8522982 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '90vh', width: '90vw' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDha5iMRcmLfdQ-c4t7eu5dEoZXYGmVri4" }}
        defaultCenter={center}
        defaultZoom={zoom}
        >
        <Marker
            lat={1.285194}
            lng={103.8522982}
            text="My Marker"
          />

        </GoogleMapReact>
        </div>
    )
}