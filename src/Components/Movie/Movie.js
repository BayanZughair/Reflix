import { Link } from 'react-router-dom'
import './Movie.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Movie = (props) => {
    const rentMovie = () => {
        props.rentMovie(props.movie.id)
    }

    const movie = props.movie

    return (
        <div className="movie-box" key={movie.id}>
            <Link to={`/movies/${movie.id}`} movie={movie}><img className="catalog-movie" src={movie.img} /></Link>
            <i className={movie.isRented ? "fas fa-minus-circle button" : "fas fa-plus-circle button"} onClick={rentMovie} id={movie.id}></i>
        </div>
    );
}

export default Movie;
