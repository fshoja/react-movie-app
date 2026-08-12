import React from "react";

export default function Search({searchTerm, setSearchTerm, handleSearch}) {

  return (
    <div className="flex justify-center gap-3 pt-8 ">
      <input 
        value={searchTerm} 
    
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Enter a movie..."
        className="w-72 rounded-lg bg-white px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-amber-500"
      />

      <button 
        onClick={handleSearch} 
        className=" bg-gray-500 px-6 py-3 rounded font-semibold text-white hover:bg-amber-600"
      >
        Search
      </button>
    </div>
  );
}


