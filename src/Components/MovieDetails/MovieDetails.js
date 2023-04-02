import React from 'react';
import { useParams } from 'react-router';
import './MovieDetails.css';

const MovieDetails = ({ movies }) => {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))


  return (
    <div>
      <div className='movie-details'>{movie.title} ({movie.year})</div>
      <img className='img' src={movie.img} alt={movie.title} />
      <p>{movie.descrShort}</p>
    </div>
  );
};

export default MovieDetails;
