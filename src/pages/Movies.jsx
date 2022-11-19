import { getData, movieSearchParams } from 'components/API/Api';
import { MovieList } from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movieList, setMovieList] = useState({ results: [] });

  useEffect(() => {
    if (!searchParams.get('query')) return;

    movieSearchParams.params.query = query;
    getData(movieSearchParams, setMovieList);
  }, []);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
    setSearchParams(value ? { query: value } : '');
  };

  const handleSubmite = e => {
    e.preventDefault();
    if (!query) return;
    movieSearchParams.params.query = query;
    getData(movieSearchParams, setMovieList);
  };

  return (
    <>
      <form onSubmit={handleSubmite}>
        <input name="query" type="text" value={query} onChange={handleChange} />
        <button type="submite">Search</button>
      </form>
      <MovieList movieList={movieList.results} />
    </>
  );
};
