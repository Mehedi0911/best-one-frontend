"use client"
import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { ImLocation } from 'react-icons/im'
const MapBox = () => {
    return (
        <div className='w-full'>

            <Map
                mapboxAccessToken="pk.eyJ1IjoibWVoZWRpMDkxIiwiYSI6ImNreTA4eXRzejAxMDYyd3Bjb205eTF5aGIifQ.UgNJWOQtmHds3CNUYuSNCQ"
                mapLib={import('mapbox-gl')}
                initialViewState={{
                    longitude: 90.4152,
                    latitude: 23.8041,
                    zoom: 10
                }}
                style={{ width: '100%', height: 600 }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                <Marker draggable longitude={90.4152} latitude={23.8041} >
                    <ImLocation className='text-brandPrimary text-3xl' />
                </Marker>
            </Map>
        </div>
    );
};

export default MapBox;