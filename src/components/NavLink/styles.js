import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkContainer = styled(Link)`
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
