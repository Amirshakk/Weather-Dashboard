import React from 'react';

     function FavoriteCities({ favorites, onSelectCity, onDeleteCity, className }) {
       return (
         <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
           <h2 className="text-2xl font-bold text-gray-800 mb-4">Favorite Cities</h2>
           {favorites.length === 0 ? (
             <p className="text-gray-500">No favorite cities yet.</p>
           ) : (
             <ul className="space-y-2">
               {favorites.map((city) => (
                 <li
                   key={city}
                   className="flex justify-between items-center text-blue-600 hover:text-blue-800"
                 >
                   <span
                     className="cursor-pointer"
                     onClick={() => onSelectCity(city)}
                   >
                     {city}
                   </span>
                   <button
                     className="text-red-500 hover:text-red-700 text-sm"
                     onClick={() => onDeleteCity(city)}
                   >
                     Delete
                   </button>
                 </li>
               ))}
             </ul>
           )}
         </div>
       );
     }

     export default FavoriteCities;