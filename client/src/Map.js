import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
};

const options = {
    
}

export const Map = ({ taxis, latitude, longitude }) => {
    const {isLoaded, loadError}= useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })
    
    if (loadError) return "Error loading maps"
    if(!isLoaded) return "Loading Maps"
    const center = {
        lat: latitude,
        lng: longitude,
    }

    return (
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={15} 
        center={center}
        options={options}>
            Map
        </GoogleMap>
    )
}