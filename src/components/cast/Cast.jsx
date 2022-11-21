import { getData, movieByIdParams } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState({ cast: [] });
  const { movieID } = useParams();

  useEffect(() => {
    movieByIdParams.END_POINT = `movie/${movieID}/credits`;

    getData(movieByIdParams, setCast);
  }, [movieID]);

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
