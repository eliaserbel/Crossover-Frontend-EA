import { useState, useEffect } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantItem from './components/RestaurantItem';
import { getRestaurants } from './services/restautants';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);


  const restaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      latitude: 40.7128,
      longitude: -74.0060,
      address: {
        street: "Main St",
        number: "1234",
        city: "City",
        state: "State"
      }
    },
    {
      id: 2,
      name: "Restaurant 2",
      latitude: 40.7218,
      longitude: -74.0059,
      address: "456 Elm St, City, State",
    },
  ];

  useEffect(() => {
    getRestaurants().then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <h1>Restaurant List</h1>
      <RestaurantList restaurants={restaurants} onRestaurantSelect={setSelectedRestaurant} />
      {selectedRestaurant && <RestaurantItem restaurant={selectedRestaurant} />}
    </div>
  );
}

export default App;
