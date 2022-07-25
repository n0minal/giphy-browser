import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  flex: 1;
`;

export const Logo = styled.h1`
  color: white;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchBoxContainer = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
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

export const NavLink = styled(Link)`
  background: transparent;
  color: white;
  font-family: 'Roboto';
  text-decoration: none;
  outline: 2px solid white;
  padding: 10px;
  border-radius: 2px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;
