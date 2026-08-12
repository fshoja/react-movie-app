import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Movie App</h1>

      <div className="flex gap-6">
        <a   className="hover:text-blue-400" href="#">Home</a>
        <a   className="hover:text-blue-400" href="#">Movies</a>
        <a   className="hover:text-blue-400" href="#">About</a>
      </div>
    </nav>
  );
}