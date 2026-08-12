
import React, { useState } from "react";
import Search from "../component/Search";
import MovieCard from "../component/MovieCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const myFun = async () => {
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=15f49003&s=${search}`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Search
        search={search}
        setSearch={setSearch}
        myFun={myFun}
      />

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            move={movie}
          />
        ))}
      </div>
    </div>
  );
}
