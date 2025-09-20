import React from 'react';

     function WeatherCard({ weatherData, className }) {
       if (!weatherData) {
         return (
           <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
             <p className="text-gray-500 text-center">Search for a city to see the weather.</p>
           </div>
         );
       }

       return (
         <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
           <h2 className="text-2xl font-bold text-gray-800 mb-4">{weatherData.city}</h2>
           <p className="text-lg text-gray-600">Temperature: {weatherData.temperature}°C</p>
           <p className="text-lg text-gray-600">Description: {weatherData.description}</p>
           <p className="text-lg text-gray-600">Humidity: {weatherData.humidity}%</p>
           <p className="text-lg text-gray-600">Wind Speed: {weatherData.windSpeed} m/s</p>
         </div>
       );
     }

     export default WeatherCard;