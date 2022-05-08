import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Location.css'


const Location = () => {
    
    const position = [23.935480035215853, 90.71383373234002]
    return (
        <div>
            <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Narsingdi,Bilasdi
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Location;