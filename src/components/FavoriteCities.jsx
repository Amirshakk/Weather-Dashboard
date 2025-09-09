import React from 'react';

     function FavoriteCities({ favorites, onSelectCity }) {
       return (
         <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-full max-w-md">
           <h2 className="text-2xl font-bold text-gray-800 mb-4">Favorite Cities</h2>
           {favorites.length > 0 ? (
             <ul className="space-y-2">
               {favorites.map((city, index) => (
                 <li
                   key={index}
                   onClick={() => onSelectCity(city)}
                   className="cursor-pointer text-blue-500 hover:underline"
                 >
                   {city}
                 </li>
               ))}
             </ul>
           ) : (
             <p className="text-gray-500">No favorite cities yet</p>
           )}
         </div>
       );
     }

     export default FavoriteCities;