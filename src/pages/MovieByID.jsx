import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieByID = () => {
  const { movieID } = useParams();
  return (
    <>
      <Link to="">Go back</Link>
      <div>{movieID}</div>
      <Link to="cast" state={{ movieID }}>
        Cast
      </Link>
      <Link to="reviews" state={{ movieID }}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};
