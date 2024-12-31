import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconUrl from '../assets/custom-icon.png'; // Import your custom icon

// Create a custom icon using Leaflet's L.Icon
const customIcon = new L.Icon({
  iconUrl: customIconUrl, // URL of the custom icon image
  iconSize: [38, 38], // Size of the icon [width, height]
  iconAnchor: [22, 38], // Point of the icon which will correspond to marker's location [x, y]
  popupAnchor: [-3, -76] // Point from which the popup should open relative to the iconAnchor [x, y]
});

// Define a functional component named MapView
const MapView = () => {
  return (
    // MapContainer is the main container for the map
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      {/* TileLayer is used to load and display tile layers on the map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker is used to add a marker to the map */}
      <Marker position={[51.505, -0.09]} icon={customIcon}>
        {/* Popup is used to display information when the marker is clicked */}
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// Export the MapView component as the default export
export default MapView;