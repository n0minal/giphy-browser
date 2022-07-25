import { NavLinkContainer } from "./styles";

const NavLink = ({ to, children }) => {
  return (<NavLinkContainer to={to}>{children}</NavLinkContainer>)
}

export default NavLink;
