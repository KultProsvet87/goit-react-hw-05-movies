import {
  MovieLink,
  MovieListItem,
  MoviePoster,
  MovieTitle,
  StyledMovieList,
} from './MovieList.styled';

export const MovieList = ({ movieList, location }) => {
  if (!movieList.length) return;
  return (
    <StyledMovieList>
      {movieList.map(movie => {
        return (
          <MovieListItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.original_title}
              />
              <MovieTitle>{movie.original_title}</MovieTitle>
            </MovieLink>
          </MovieListItem>
        );
      })}
    </StyledMovieList>
  );
};
