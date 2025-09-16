import React, { useState } from 'react';
     import axios from 'axios';
     import SearchBar from './components/SearchBar';
     import WeatherCard from './components/WeatherCard';
     import FavoriteCities from './components/FavoriteCities';

     function App() {
       const [weatherData, setWeatherData] = useState(null);
       const [favorites, setFavorites] = useState([]);
       const [error, setError] = useState(null);

       const handleSearch = async (city) => {
         try {
           const response = await axios.get(
             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
               import.meta.env.VITE_OPENWEATHER_API_KEY
             }&units=metric`
           );
           setWeatherData({
             city: response.data.name,
             temperature: Math.round(response.data.main.temp),
             description: response.data.weather[0].description,
             humidity: response.data.main.humidity,
             windSpeed: response.data.wind.speed,
           });
           setError(null);
           if (!favorites.includes(city)) {
             setFavorites([...favorites, city]);
           }
         } catch (err) {
           setError('City not found or API error. Please try again.');
           setWeatherData(null);
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
           <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
             <WeatherCard weatherData={weatherData} />
             <FavoriteCities favorites={favorites} onSelectCity={handleSelectCity} />
           </div>
         </div>
       );
     }

     export default App;