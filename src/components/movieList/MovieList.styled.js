import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const StyledMovieList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  max-width: 870px;
  gap: 20px;
  /* flex-direction: column; */
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MovieListItem = styled('li')`
  display: flex;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  :hover {
    background-color: #eee;
    scale: 1.05;
  }
`;

export const MoviePoster = styled('img')`
  flex-grow: 1;
  max-height: 300px;
  contain: content;
`;

export const MovieTitle = styled('p')`
  font-weight: 500;
  text-align: center;
`;
