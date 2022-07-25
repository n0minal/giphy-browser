import { HeaderContainer, Logo, LogoContainer, NavbarContainer } from "./styles";

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Giphy Search</Logo>
      </LogoContainer>
      <NavbarContainer>
        {children}
      </NavbarContainer>
    </HeaderContainer>
  );
}

export default Header;
