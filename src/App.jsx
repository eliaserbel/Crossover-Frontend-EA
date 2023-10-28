import { useState, useEffect } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import {getRestaurants, getSearch} from "./services/restautants"

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    getRestaurants()      
      .then((data) => setRestaurants(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowMap(true);
  };

  const handleSearch = () => {
    getSearch(selectedTag)
    .then((data) => {
      let filteredData = data;

        if (selectedTag) {
          filteredData = filteredData.filter((restaurant) => restaurant.tags.includes(selectedTag));
        }

        if (selectedCity) {
          filteredData = filteredData.filter((restaurant) => restaurant.city === selectedCity);
        }

        setRestaurants(filteredData);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header>
        <h2>Yelp</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Find: burgers, pizza..."
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All Cities</option>
            <option value="Berlin">Berlin</option>
            <option value="Hamburg">Hamburg</option>
            
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <RestaurantList
        restaurants={restaurants}
        onRestaurantSelect={handleRestaurantClick}
      />
      {selectedRestaurant && (
        <RestaurantDetail restaurant={selectedRestaurant} showMap={showMap} />
      )}
    </div>
  );
}

export default App;