import { getData, trendsSearchParams } from 'components/API/Api';
import { MovieList } from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movieList, setMovieList] = useState({ results: [] });

  useEffect(() => {
    getData(trendsSearchParams, setMovieList);
  }, []);

  return <MovieList movieList={movieList.results} />;
};
