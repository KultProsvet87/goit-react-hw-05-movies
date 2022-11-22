import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCard = styled('div')`
  margin: 0 auto;
  width: 860px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const MovieInfo = styled('div')`
  padding-top: 20px;
  display: flex;
  gap: 20px;
`;
export const Poster = styled('img')`
  width: 342px;
`;

export const MovieTitle = styled('h1')`
  font-size: 24px;
  font-weight: 700;
  padding: 20px 0;
`;

export const Title = styled('h2')`
  font-size: 20px;
  font-size: 500;
`;

export const Btn = styled(Link)`
  background-color: #efefef;
  border-radius: 5px;
  border: none;
  color: #000;
  font-weight: 700;
  padding: 5px;
  min-width: 80px;
  max-width: 100px;
  text-align: center;

  :hover {
    background-color: #217cc8;
    color: #fff;
  }
`;

export const MoreInfo = styled('div')`
  display: flex;
  padding: 20px 0;
  gap: 20px;
`;
