import React from 'react';
import Movie from '../Movie/Movie';
import './Catalog.css';


const Catalog = ({ movies, budget, text, updateText, rentMovie }) => {

  const rentedMovies = movies.filter((movie) => movie.isRented)
  return (
    <div id="catalog">
      <input placeholder="Search" value={text} onChange={updateText}></input>
      <div className='budget'>Budget: ${budget}</div>
      {budget > 0 && rentedMovies.length > 0 && (
        <div>
          <div>Rented:</div>
          <div className="catalog-results">
            {movies.filter((movie) => movie.isRented).map((movie) => (<Movie key={movie.id} movie={movie} rentMovie={rentMovie} />
            ))}
          </div>
        </div>
      ) }
      
      <div>Catalog:</div>
      <div className="catalog-results">
        {movies.map((movie) => (<Movie key={movie.id} movie={movie} rentMovie={rentMovie} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
