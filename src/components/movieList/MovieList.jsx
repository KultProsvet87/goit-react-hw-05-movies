import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <ul>
      {movieList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.id}</Link>
          </li>
        );
      })}
    </ul>
  );
};
