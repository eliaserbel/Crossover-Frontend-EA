import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from "prop-types"
import 'leaflet/dist/leaflet.css';

const RestaurantList = ({ restaurants, onRestaurantSelect, selectedTag, selectedCity }) => {

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (
      (!selectedTag && restaurant.tags.includes(selectedTag)) &&
      (!selectedCity && restaurant.city === selectedCity)
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className="restaurant-list">
      <div className="restaurant-map">
      {restaurants.map((restaurant) => <div key={restaurant.id}>{restaurant.name}</div>)}

        <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '100vh', width: '100vw' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />          {filteredRestaurants.map(restaurant => (
            <Marker
              key={restaurant.id}
              position={[restaurant.latitude, restaurant.longitude]}
              eventHandlers={{
                click: () => onRestaurantSelect(restaurant),
              }}
            >
              <Popup>{restaurant.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="restaurant-items">
        {filteredRestaurants.map(restaurant => (
          <div key={restaurant.id}>{restaurant.name} {restaurant.tags.map((tag, index) => (<div key={index}>{tag}</div>))}</div>
          ))}
      </div>
    </div>
  );
};


RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  onRestaurantSelect: PropTypes.func,
  selectedTag: PropTypes.string,
  selectedCity: PropTypes.string
}

export default RestaurantList;