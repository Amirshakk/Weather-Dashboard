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

       const handleSearch = async (city) => {
         try {
           // Current weather
           const weatherResponse = await axios.get(
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
           });

           // 5-day forecast
           const forecastResponse = await axios.get(
             `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
               import.meta.env.VITE_OPENWEATHER_API_KEY
             }&units=metric`
           );
           console.log('Forecast API Response:', forecastResponse.data);
           setForecastData(forecastResponse.data.list);

           setError(null);
           if (!favorites.includes(city)) {
             setFavorites([...favorites, city]);
           }
         } catch (err) {
           console.error('API Error:', err.response?.data || err.message);
           setError('City not found or API error. Please try again.');
           setWeatherData(null);
           setForecastData(null);
         }
       };

       const handleSelectCity = (city) => {
         handleSearch(city);
       };

       return (
         <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
           <h1 className="text-4xl font-bold text-gray-800 mb-6">Weather Forecast Dashboard</h1>
           <SearchBar onSearch={handleSearch} />
           {error && <p className="text-red-500 mb-4">{error}</p>}
           <WeatherCard weatherData={weatherData} className="w-full max-w-md mb-6" />
           <FavoriteCities
             favorites={favorites}
             onSelectCity={handleSelectCity}
             className="w-full max-w-md mb-6"
           />
           <WeatherChart forecastData={forecastData} />
         </div>
       );
     }

     export default App;