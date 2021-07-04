// import React, { useState } from 'react';
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// type Props = {
//     taxis: any;
//     latitude: number;
//     longitude: number;
// };

// const mapContainerStyle = {
//     width: '100vw',
//     height: '100vh'
// };

// export const Map: React.FunctionComponent<Props> = ({ taxis, latitude, longitude }) => {
//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
//     })

//     const center = {
//         lat: latitude,
//         lng: longitude,
//     }

//     return (
//         <>
//         {loadError && "Error loading maps"}
//         {!isLoaded ? "Loading Maps" : 
//         <GoogleMap 
//             mapContainerStyle={mapContainerStyle} 
//             zoom={15} 
//             center={center}>
//             Map
//         </GoogleMap>
//         }
//         </>
//     )
// }

