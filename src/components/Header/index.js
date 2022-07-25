import { HeaderContainer, Logo, LogoContainer, NavbarContainer } from "./styles";

const Header = ({ title, children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>{ title || 'Giphy Search' }</Logo>
      </LogoContainer>
      <NavbarContainer>
        {children}
      </NavbarContainer>
    </HeaderContainer>
  );
}

export default Header;
