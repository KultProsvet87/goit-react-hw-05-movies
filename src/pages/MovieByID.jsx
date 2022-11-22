import { MovieDetailsCard } from 'components/MovieDetails/MovieDetails';
import {
  Btn,
  MoreInfo,
  MovieCard,
} from 'components/MovieDetails/MovieDetails.styled';
import { Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieByID = () => {
  const { movieID } = useParams();
  const from = useLocation().state?.from ?? '/movies';

  return (
    <>
      <MovieCard>
        <Btn to={from}>Go back</Btn>
        <MovieDetailsCard movieId={movieID} />
        <MoreInfo>
          <Btn to="cast" state={{ movieID, from }}>
            Cast
          </Btn>
          <Btn to="reviews" state={{ movieID, from }}>
            Reviews
          </Btn>
        </MoreInfo>
        <Suspense>
          <Outlet />
        </Suspense>
      </MovieCard>
    </>
  );
};

export default MovieByID;
