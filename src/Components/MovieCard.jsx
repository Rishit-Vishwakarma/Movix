import '../Css/MovieCard.css';
import { useMovieContext } from '../Context/MovieContext';

function MovieCard({ movie }) {

  const {isFavorites, addFavorites, removeFavorites} = useMovieContext()
  const favorite = isFavorites(movie.imdbID)

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite){
      removeFavorites(movie.imdbID)
    }else {
      addFavorites(movie);
      saveToHistory(movie.Title)
    }

  }

  function saveToHistory(title){
    const store = JSON.parse(localStorage.getItem("history")) || [];
    if(!store.includes(title)){
      store.push(title);
      localStorage.setItem("history", JSON.stringify(store));
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/250x350?text=No+Image"} alt={movie.Title} />

        <div className="movie-overlays">
          <button className={`btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
        </div>
      </div>     
    </div>
  );
}

export default MovieCard;
