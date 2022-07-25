import styled from 'styled-components';

export const SearchBoxContainer = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  height: 2rem;
  width: 20rem;
  color: white;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: white;
  font-family: 'Roboto', sans-serif;
  outline: 2px solid white;
  font-size: 14px;
  height: 2rem;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    background: transparent;
    color: white;
  }
`;
