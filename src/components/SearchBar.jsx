import React, { useState } from 'react';

     function SearchBar({ onSearch }) {
       const [city, setCity] = useState('');

       const handleSubmit = (e) => {
         e.preventDefault();
         if (city.trim()) {
           onSearch(city);
           setCity('');
         }
       };

       return (
         <form onSubmit={handleSubmit} className="w-full max-w-md">
           <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
             <input
               type="text"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               placeholder="Enter city name"
               className="w-full p-2 text-gray-700 focus:outline-none"
             />
             <button
               type="submit"
               className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
             >
               Search
             </button>
           </div>
         </form>
       );
     }

     export default SearchBar;