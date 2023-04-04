import { Link } from 'react-router-dom'
import './Movie.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Movie = (props) => {
  const rentMovie = () => {
    props.rentMovie(props.movie.id);
  }

  const renderMovieImage = () => {
    return (
      <Link to={`/movies/${props.movie.id}`}><img className="catalog-movie" src={props.movie.img} /></Link>
    );
  }

  const renderRentButton = () => {
    const { movie } = props
    const buttonClass = movie.isRented ? "fas fa-minus-circle button" : "fas fa-plus-circle button"
    return (<i className={buttonClass} onClick={rentMovie} id={movie.id}></i> )
  }

  return (
    <div className="movie-box" key={props.movie.id}>
      {renderMovieImage()}
      {renderRentButton()}
    </div>
  );
}

export default Movie;
