import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5167/api/weather")
      .then(response => setWeather(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weather ? (
        <p>Temperature: {weather.temperature} - Condition: {weather.condition}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;