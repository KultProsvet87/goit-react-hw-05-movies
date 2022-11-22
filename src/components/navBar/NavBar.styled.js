import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled('ul')`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const NavListItem = styled(NavLink)`
  display: block;
  padding: 16px 32px;
  background-color: #efefef;
  border-radius: 5px;
  color: #000;
  font-weight: 700;

  :hover:not(.active) {
    background-color: #217cc8;
    color: #fff;
  }
  &.active {
    background-color: #217cc8;
    color: #fff;
  }
`;
