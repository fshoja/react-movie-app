




import React, { useState } from "react";
import axios from "axios";
import Search from "./component/Search";
import Result from "./component/Resualt"; 
import Detail from "./component/Detail";
import './App.css';


const API_KEY = "15f49003";
const BASE_URL = "https://www.omdbapi.com/";

export default function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
      
      if (response.data.Response === "True") {
        setResults(response.data.Search);
      } else {
        setResults([]);
        alert(response.data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const openDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
      if (response.data.Response === "True") {
        setSelectedMovie(response.data); 
      } else {
        alert("Movie details not found!");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const closeDetails = () => {
    setSelectedMovie(null); 
  };

  return (


  <div className="container-fluid main-wrapper min-vh-100 d-flex flex-column justify-content-center align-items-center">
    
    {selectedMovie ? (
      <Detail selected={selectedMovie} closed={closeDetails} />
    ) : (
      <div className="w-100">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">Movie App</h1>

       
          <div className="d-flex justify-content-center">
            <Search 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleSearch={handleSearch}
            />
          </div>
        </header>

        <div className="container">
          <div className="row justify-content-center"> 
            {results.length > 0 ? (
              results.map((movie) => (
                <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                  <Result 
                    movie={movie} 
                    openDetails={openDetails} 
                  />
                </div>
              ))
            ) : (
              <div className="col-12 text-center text-muted">
                <p>No movies found. Try searching something!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);




}
