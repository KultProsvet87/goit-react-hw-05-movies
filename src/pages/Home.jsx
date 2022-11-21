import { getData, trendsSearchParams } from 'components/API/Api';
import { MovieList } from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [movieList, setMovieList] = useState({ results: [] });
  const location = useLocation();

  useEffect(() => {
    getData(trendsSearchParams, setMovieList);
  }, []);

  return <MovieList movieList={movieList.results} location={location} />;
};
