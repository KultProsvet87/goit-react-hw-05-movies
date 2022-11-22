import styled from 'styled-components';

export const StyledForm = styled('form')`
  text-align: center;
  padding-top: 20px;
`;

export const SearchInput = styled('input')`
  margin-right: 20px;
`;

export const SearchBtn = styled('button')`
  background-color: #efefef;
  border-radius: 5px;
  border: none;
  color: #000;
  font-weight: 700;
  padding: 5px;

  :hover {
    background-color: #217cc8;
    color: #fff;
  }
`;
