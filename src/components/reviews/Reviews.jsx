import { getData, movieByIdParams } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState({ results: [] });

  const { movieID } = useParams();

  useEffect(() => {
    movieByIdParams.END_POINT = `movie/${movieID}/reviews`;

    getData(movieByIdParams, setReviews);
  }, [movieID]);

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
