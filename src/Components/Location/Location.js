import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Location.css'

const Location = () => {
    const position = [23.934621449748832, 90.71200833858734]
    return (
        <div>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
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