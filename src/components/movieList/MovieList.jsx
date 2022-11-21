import { Link } from 'react-router-dom';

export const MovieList = ({ movieList, location }) => {
  return (
    <ul>
      {movieList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.id}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
