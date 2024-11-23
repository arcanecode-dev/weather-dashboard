import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "10px" }}>
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>Weather in {weather.city}</h2>
          <p>Temperature: {weather.temp}°C</p>
          <p>Condition: {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
