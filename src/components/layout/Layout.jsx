import { NavBar } from 'components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
