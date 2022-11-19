import { getData, movieByIdParams } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState({ cast: [] });
  const location = useLocation();
  const movieId = location.state.movieID;

  useEffect(() => {
    movieByIdParams.END_POINT = `movie/${movieId}/credits`;

    getData(movieByIdParams, setCast);
  }, [movieId]);

  return (
    <>
      <div>Cast</div>
      <ul>
        {cast.cast.map(cast => (
          <li key={cast.id}>{cast.name}</li>
        ))}
      </ul>
    </>
  );
};
