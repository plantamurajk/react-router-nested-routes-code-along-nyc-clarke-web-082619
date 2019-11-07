import React from 'react';
import MovieShow from '../components/MovieShow'
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieId => {
       return <Link key={movieId} to={`/movies/${movieId}`}><li>{movies[movieId].title}</li></Link>
    })

    return (
        <div>{renderMovies}</div>
    )
}

export default MoviesList;