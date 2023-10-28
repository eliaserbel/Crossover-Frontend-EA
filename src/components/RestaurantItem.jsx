import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="detailed-restaurant">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>
      <div className="detailed-restaurant-map">
        <MapContainer center={[restaurant.latitude, restaurant.longitude]} zoom={15} style={{ height: '100vh', width:'100vw' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "  />
          <Marker position={[restaurant.latitude, restaurant.longitude]}>
            <Popup>{restaurant.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default RestaurantItem;
