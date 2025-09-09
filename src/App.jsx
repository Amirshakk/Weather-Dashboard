import React, { useState } from 'react';
     import SearchBar from './components/SearchBar';
     import WeatherCard from './components/WeatherCard';
     import FavoriteCities from './components/FavoriteCities';

     function App() {
       const [weatherData, setWeatherData] = useState(null);
       const [favorites, setFavorites] = useState([]);

       const handleSearch = (city) => {
         setWeatherData({
           city,
           temperature: 25,
           description: 'Sunny',
           humidity: 60,
           windSpeed: 5,
         });
         if (!favorites.includes(city)) {
           setFavorites([...favorites, city]);
         }
       };

       const handleSelectCity = (city) => {
         handleSearch(city);
       };

       return (
         <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
           <h1 className="text-4xl font-bold text-gray-800 mb-6">Weather Forecast Dashboard</h1>
           <SearchBar onSearch={handleSearch} />
           <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
             <WeatherCard weatherData={weatherData} />
             <FavoriteCities favorites={favorites} onSelectCity={handleSelectCity} />
           </div>
         </div>
       );
     }

     export default App;