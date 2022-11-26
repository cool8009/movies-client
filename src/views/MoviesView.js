import { useEffect, useState } from "react"
import MoviesService from "../services/MoviesService";
import React from 'react'
import MoviesComponent from "../components/MoviesComponent";
import Pagination from "../components/Pagination";
import Button from 'react-bootstrap/Button';

import SearchComponent from "../components/SearchComponent";



const MoviesView = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(10);
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false)

    
    useEffect(() => {
        const getPopularMovies = async () => {
          setLoading(true);
          const res = await MoviesService.getPopularMovies();  
          setPopularMovies(res);
          setLoading(false);  
        }
        getPopularMovies();
      }, [])

      //Search Handler
      const sendSearch = async (searchText) => {
        setLoading(true);
        const searchRes = await MoviesService.searchMovies(searchText);
        setSearchResults(searchRes);
        setLoading(false);
        setShowSearchResults(true);
      }

      // Get Current Movies
      const indexOfLastMovie = currentPage * moviesPerPage;
      const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
      const currentMovies = (movies) => movies.slice(indexOfFirstMovie, indexOfLastMovie); 
      // ^ accepts any movie array, good for search results AND popular movies
      
      //change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="movies-container" style={{ textAlign: 'center' }}>
            <SearchComponent sendSearch={sendSearch}/>
            {!showSearchResults ? 
                (<h1 marginTop="30px">Current Popular Movies:</h1>) :
                (
                    <div>
                        <h1 marginTop="30px">Search Results:</h1>
                        <Button onClick={() => setShowSearchResults(false)}>Back To Popular Movies</Button>
                    </div>
                )
                }
            <MoviesComponent 
                movies={!showSearchResults ? currentMovies(popularMovies) : currentMovies(searchResults)} 
                loading={loading}
            />
            <Pagination 
                moviesPerPage={moviesPerPage} 
                setMoviesPerPage={setMoviesPerPage}
                totalMovies={!showSearchResults ? popularMovies.length : searchResults.length}
                paginate={paginate}
            />
        </div>
    )
}

export default MoviesView