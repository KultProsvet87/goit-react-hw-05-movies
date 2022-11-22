import { getData, movieSearchParams } from 'components/API/Api';
import { MovieList } from 'components/movieList/MovieList';
import { SearchForm } from 'components/searchForm/searchForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [isSubmit, setIsSubmit] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movieList, setMovieList] = useState({ results: [] });
  const location = useLocation();

  useEffect(() => {
    if (!isSubmit) return;
    setIsSubmit(false);

    const query = searchParams.get('query');
    if (!query) return;

    movieSearchParams.params.query = query;
    getData(movieSearchParams, setMovieList);
  }, [isSubmit, searchParams]);

  return (
    <>
      <SearchForm
        setQuery={setQuery}
        query={query}
        setSearchParams={setSearchParams}
        setIsSubmit={setIsSubmit}
      />
      <MovieList movieList={movieList.results} location={location} />
    </>
  );
};

export default Movies;
