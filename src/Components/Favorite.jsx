import '../Css/Favorites.css'
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from './MovieCard'

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet.</h2>
      <p>Start adding your favorite movies here.</p>
    </div>
  );
}

export default Favorite;
