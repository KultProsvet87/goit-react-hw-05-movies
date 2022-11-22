import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from './layout/Layout';
// import { Movies } from '../pages/Movies';
// import { MovieByID } from '../pages/MovieByID';
// import { Cast } from './cast/Cast';
// import { Reviews } from './reviews/Reviews';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies'));
const MovieByID = lazy(() => import('../pages/MovieByID'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieByID />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
