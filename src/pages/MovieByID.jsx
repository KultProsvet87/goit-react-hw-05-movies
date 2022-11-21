import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieByID = () => {
  const { movieID } = useParams();
  const from = useLocation().state?.from ?? '/movies';

  return (
    <>
      <Link to={from}>Go back</Link>
      <div>{movieID}</div>
      <Link to="cast" state={{ movieID, from }}>
        Cast
      </Link>
      <Link to="reviews" state={{ movieID, from }}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};
