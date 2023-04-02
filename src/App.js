import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Catalog from './Components/Catalog/Catalog';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { MOVIES, USERS} from './Constants';

const App = () => {
  const [users, setUsers] = useState(USERS)
  const [movies, setMovies] = useState(MOVIES)
  const [text, setText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])
  const [budget, setBudget] = useState(100)

  const rentMovie = (id) => {
    const updatedMovies = [...movies]
    const currentMovie = updatedMovies.find(movie => movie.id === id)
    currentMovie.isRented = !currentMovie.isRented
    const updatedBudget = budget + (currentMovie.isRented ? -30 : 30)
    if (updatedBudget < 0) {
      alert("There are insufficient funds")
      currentMovie.isRented = !currentMovie.isRented 
      return;
    }
    setBudget(updatedBudget)
    setMovies(updatedMovies)
  
  };

  const updateText = (event) => {
    let updatedMovies = [...movies]
    updatedMovies = updatedMovies.filter(movie => movie.title.toLowerCase().match(event.target.value.toLowerCase()))
    setText(event.target.value)
    setFilteredMovies(updatedMovies)
  };

  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </div>
          <div className="logo">REFLIX</div>
        </div>
        <Routes>
          <Route path="/" element={<Landing users={users} />} />
        </Routes>

        <Routes>
          <Route path="/catalog" element={<Catalog updateText={updateText} text={text} rentMovie={rentMovie} movies={text === "" ? movies : filteredMovies}  budget={budget}/>} />
        </Routes>

        <Routes>
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;

