
import {RENT_PRICE} from './Constants';

export const toggleRentedStatus = (selectedMovie, movies) => {
    const updatedMovies = [...movies]
    const movieToRent = updatedMovies.find(
      (movie) => movie.id === selectedMovie.id
    )
    movieToRent.isRented = !movieToRent.isRented
    return updatedMovies
  };
  
  export const updateBudget = (selectedMovie, budget) => {
    const updatedBudget = budget + (selectedMovie.isRented ? -RENT_PRICE : RENT_PRICE)
    return updatedBudget
  };

  export const checkSufficientFunds = (updatedBudget) => {
    if (updatedBudget < 0) {
      alert('There are insufficient funds')
      return false;
    }
    return true;
  };