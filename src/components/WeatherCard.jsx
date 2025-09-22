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
         <div className={`bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform ${className}`}>
           <div className="flex items-center space-x-4">
             <img
               src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
               alt={weatherData.description}
               className="w-16 h-16"
             />
             <div>
               <h2 className="text-2xl font-bold text-gray-800">{weatherData.city}</h2>
               <p className="text-lg text-gray-600">Temperature: {weatherData.temperature}°C</p>
               <p className="text-lg text-gray-600 capitalize">Description: {weatherData.description}</p>
               <p className="text-lg text-gray-600">Humidity: {weatherData.humidity}%</p>
               <p className="text-lg text-gray-600">Wind Speed: {weatherData.windSpeed} m/s</p>
             </div>
           </div>
         </div>
       );
     }

     export default WeatherCard;