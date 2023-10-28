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
      {restaurants.map((restaurant) => <div key={restaurant.id}>{restaurant.name}</div>)}

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