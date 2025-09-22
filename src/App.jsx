import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import FavoriteCities from './components/FavoriteCities';
import WeatherChart from './components/WeatherChart';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url, { timeout: 10000 });
        return response;
      } catch (err) {
        if (i === retries - 1) throw err;
        console.log(`Retry ${i + 1}/${retries} for ${url}`);
        await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
      }
    }
  };

  const handleSearch = async (city) => {
    setError(null);
    setWeatherData(null);
    setForecastData(null);

    try {
      const weatherResponse = await fetchWithRetry(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metric`
      );
      console.log('Weather API Response:', weatherResponse.data);
      setWeatherData({
        city: weatherResponse.data.name,
        temperature: Math.round(weatherResponse.data.main.temp),
        description: weatherResponse.data.weather[0].description,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
        icon: weatherResponse.data.weather[0].icon,
      });

      const forecastResponse = await fetchWithRetry(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metric`
      );
      console.log('Forecast API Response:', forecastResponse.data);
      setForecastData(forecastResponse.data.list);

      if (!favorites.includes(city)) {
        setFavorites([...favorites, city]);
      }
    } catch (err) {
      console.error('API Error:', err.response?.data || err.message);
      setError('City not found or API error. Please try again.');
    }
  };

  const handleSelectCity = (city) => {
    handleSearch(city);
  };

  const handleDeleteCity = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-950 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Weather Dashboard</h1>
          <div className="mt-4 sm:mt-0 w-full sm:w-1/3">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 space-y-6">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <WeatherCard
          weatherData={weatherData}
          className="w-full max-w-2xl mx-auto"
        />
        <FavoriteCities
          favorites={favorites}
          onSelectCity={handleSelectCity}
          onDeleteCity={handleDeleteCity}
          className="w-full max-w-2xl mx-auto"
        />
        <WeatherChart
          forecastData={forecastData}
          className="w-full max-w-4xl mx-auto"
        />
      </main>
    </div>
  );
}

export default App;
