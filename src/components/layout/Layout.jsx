import { NavBar } from 'components/navBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
