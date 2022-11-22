import { useState } from 'react';
import { useEffect } from 'react';
import { getData, movieByIdParams } from '../API/Api';
import { MovieInfo, Poster, MovieTitle, Title } from './MovieDetails.styled';

export const MovieDetailsCard = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    movieByIdParams.END_POINT = `/movie/${movieId}`;
    getData(movieByIdParams, setMovieDetails);
  }, [movieId]);

  if (!movieDetails) return;

  return (
    <MovieInfo>
      <Poster
        src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
      />
      <div>
        <MovieTitle>{movieDetails.original_title}</MovieTitle>
        <Title>Overview</Title>
        <p>{movieDetails.overview}</p>
        <Title>Reting</Title>
        <p>{movieDetails.vote_average}</p>
      </div>
    </MovieInfo>
  );
};
