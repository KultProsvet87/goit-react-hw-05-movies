import { getData, movieByIdParams } from 'components/API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState({ results: [] });

  const { movieID } = useParams();

  useEffect(() => {
    movieByIdParams.END_POINT = `movie/${movieID}/reviews`;

    getData(movieByIdParams, setReviews);
  }, [movieID]);

  return (
    <>
      {reviews.results.length ? (
        <>
          <p>Reviews</p>
          <ul>
            {reviews.results.map(result => (
              <li key={result.id}>
                <h2>{result.author}</h2>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>At the moment, there are no reviews</p>
      )}
    </>
  );
};

export default Reviews;
