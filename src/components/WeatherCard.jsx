import React from 'react';

     function WeatherCard({ weatherData }) {
       return (
         <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-md">
           {weatherData ? (
             <>
               <h2 className="text-2xl font-bold text-gray-800">{weatherData.city}</h2>
               <p className="text-lg text-gray-600">{weatherData.description}</p>
               <p className="text-3xl font-semibold text-blue-500">{weatherData.temperature}°C</p>
               <p className="text-gray-500">Humidity: {weatherData.humidity}%</p>
               <p className="text-gray-500">Wind: {weatherData.windSpeed} m/s</p>
             </>
           ) : (
             <p className="text-gray-500">Search for a city to see weather data</p>
           )}
         </div>
       );
     }

     export default WeatherCard;