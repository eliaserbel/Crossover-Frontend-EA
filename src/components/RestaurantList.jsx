import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const RestaurantList = ({ restaurants, onRestaurantSelect }) => {
    function Navbar() {
        return (
          <header>
            <nav>
              <a>
                <h2>Yelp</h2>
              </a>
      
              <ul>
                <form action="/" method="get">
                  <label htmlFor="header-search-restaurants">
                    <span className="visually-hidden">Search blog posts</span>
                  </label>
                  <input
                    type="text"
                    id="header-search"
                    placeholder="find: burgers, pizza..."
                    name="s"
                  />
                </form>
                <form action="/" method="get">
                  <label htmlFor="location">
                    <span className="visually-hidden">Search blog posts</span>
                  </label>
                  <input
                    type="text"
                    id="header-search"
                    placeholder="find: places"
                    name="s"
                  />
                  <button type="submit">Search</button>
                </form>
              </ul>
            </nav>
          </header>
        );
      }

  return (
    <div className="restaurant-list">
      <div className="restaurant-map">
        <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {restaurants.map((restaurant, index) => (
            <Marker
              key={restaurant.id}
              position={[restaurant.latitude, restaurant.longitude]}
              eventHandlers={{
                click: () => onRestaurantSelect(restaurant)
              }}
            >
              <Popup>{restaurant.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="restaurant-items">
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.id}>{restaurant.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
