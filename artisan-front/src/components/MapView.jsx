import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define a functional component named MapView
const MapView = () => {
  return (
    <MapContainer center={[5.545923, -0.25731]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[5.545923, -0.25731]}>
        <Popup>
          This is you
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;