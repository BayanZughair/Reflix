import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import Landing from './Components/Landing/Landing';
import Catalog from './Components/Catalog/Catalog';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { toggleRentedStatus, updateBudget, checkSufficientFunds} from './movieFunctions.js';
import {MOVIES , USERS} from './mock-data';

const App = () => {
  const [users, setUsers] = useState(USERS)
  const [movies, setMovies] = useState(MOVIES)
  //tbd
  const [text, setText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])
  const [budget, setBudget] = useState(100)



  const rentMovie = (selectedMovieId) => {
    const movieToRent  = movies.find((movie) => movie.id === selectedMovieId)
    const updatedMovies = toggleRentedStatus(movieToRent , movies)
    const updatedBudget = updateBudget(movieToRent , budget)

    if (checkSufficientFunds(updatedBudget)) {
      setMovies(updatedMovies)
      setBudget(updatedBudget)
    } else {
      toggleRentedStatus(movieToRent , updatedMovies)
    }
  };

  const updateText = (event) => {
    const updatedMovies = movies.filter((movie) => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setText(event.target.value)
    setFilteredMovies(updatedMovies)
  };

  return (
    <Router>
      <div className="App">
      <NavBarComponent />
      </div>
        <Routes>
          <Route path="/" element={<Landing users={users} />} />
          <Route path="/catalog" element={<Catalog updateText={updateText} text={text} rentMovie={rentMovie} movies={text === "" ? movies : filteredMovies}  budget={budget}/>} />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
    </Router>
  );
};

export default App;

