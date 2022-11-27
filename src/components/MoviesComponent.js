import React from 'react'
import MovieComponent from "./MovieComponent";
import CardGroup from 'react-bootstrap/CardGroup';

//This component handles mapping and creating MovieComponent, based on amount of movies
const MoviesComponent = ({ movies, loading}) => {
    
    if(loading) {
        return <h2>Loading..</h2>
    }
  return (
    <div>
            <CardGroup  
                style={{ alignItems: 'center',
                justifyContent: 'center'}}
            >
            {movies.map(movie => 
                <MovieComponent key={movie.id} movie={movie}/>)}
            </CardGroup>
        </div>
  )
}

export default MoviesComponent