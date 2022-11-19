import { getData, movieByIdParams } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState({ results: [] });
  const location = useLocation();
  const movieId = location.state.movieID;

  useEffect(() => {
    movieByIdParams.END_POINT = `movie/${movieId}/reviews`;

    getData(movieByIdParams, setReviews);
  }, [movieId]);

  return (
    <>
      <div>Reviews</div>
      <ul>
        {reviews.results.map(result => (
          <li key={result.id}>
            <h2>{result.author}</h2>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
