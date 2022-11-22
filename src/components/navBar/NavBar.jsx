import { NavList, NavListItem } from './NavBar.styled';

export const NavBar = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavListItem to="/">Home</NavListItem>
        </li>
        <li>
          <NavListItem to="movies">Movies</NavListItem>
        </li>
      </NavList>
    </nav>
  );
};
