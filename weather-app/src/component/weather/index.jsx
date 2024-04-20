import Search from "../search";
import "../../App.css";
import { useState, useEffect } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=8219a465274941c9b752043e579c0e15`
      );
  
      const data = await response.json(); // Await the JSON parsing
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate(){
    return new Date().toLocaleDateString('en-us',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'

    })
  }

  useEffect(() => {
    fetchWeatherData("Mumbai");
  }, []);

  console.log(weatherData)

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">please wait ....</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            {weatherData?.main?.temp}
          </div>
          <p className="description">
             {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : '' }
          </p>
          <div className="weather-info">
          <div className="column">
            <p className="wind">
                {weatherData?.wind?.speed}
            </p>
            <p>Wind Speed</p>
            </div>
          <div className="column">
            <p className="humidity">
                {weatherData?.main?.humidity}%
            </p>
            <p>Humidity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
