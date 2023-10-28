import { useState, useEffect } from "react";
import "./App.css";
import { getRestaurants } from "./services/restautants";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    getRestaurants().then((data) => console.log(data));
  }, []);

  return <div className="App"></div>;
}

export default App;
