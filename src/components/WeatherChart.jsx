import React from 'react';
     import Plot from 'react-plotly.js';

     function WeatherChart({ forecastData }) {
       if (!forecastData) {
         return <p className="text-gray-500 text-center"></p>;
       }

       const dates = forecastData.map(item => item.dt_txt);
       const temps = forecastData.map(item => item.main.temp);

       return (
         <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-4xl">
           <h2 className="text-2xl font-bold text-gray-800 mb-4">5-Day Temperature Forecast</h2>
           <Plot
             data={[
               {
                 x: dates,
                 y: temps,
                 type: 'scatter',
                 mode: 'lines+markers',
                 marker: { color: '#3B82F6' },
                 line: { color: '#3B82F6' },
                 name: 'Temperature (°C)',
               },
             ]}
             layout={{
               autosize: true,
               xaxis: { title: 'Date', tickangle: 45 },
               yaxis: { title: 'Temperature (°C)' },
               margin: { t: 30, b: 100, l: 60, r: 20 },
               showlegend: true,
             }}
             config={{ responsive: true }}
             className="w-full h-[400px]"
           />
         </div>
       );
     }

     export default WeatherChart;