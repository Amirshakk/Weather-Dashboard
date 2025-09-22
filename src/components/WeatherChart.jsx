import React from 'react';
     import Plot from 'react-plotly.js';

     function WeatherChart({ forecastData, className }) {
       if (!forecastData) {
         return (
           <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
             <p className="text-gray-500 text-center">No forecast data available. Search for a city.</p>
           </div>
         );
       }

       const dates = forecastData.map(item => item.dt_txt);
       const temperatures = forecastData.map(item => item.main.temp);

       return (
         <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
           <h2 className="text-2xl font-bold text-gray-800 mb-4">5-Day Forecast</h2>
           <Plot
             data={[
               {
                 x: dates,
                 y: temperatures,
                 type: 'scatter',
                 mode: 'lines+markers',
                 line: { color: '#1e90ff', width: 2 },
                 marker: { size: 8, color: '#1e90ff' },
               },
             ]}
             layout={{
               autosize: true,
               margin: { t: 30, b: 100, l: 50, r: 50 },
               xaxis: { title: 'Date', tickangle: 45 },
               yaxis: { title: 'Temperature (°C)' },
               paper_bgcolor: 'transparent',
               plot_bgcolor: 'transparent',
               font: { family: 'Arial', color: '#333' },
             }}
             config={{ responsive: true }}
             className="w-full h-96"
           />
         </div>
       );
     }

     export default WeatherChart;