import { HeaderContainer, Logo, LogoContainer, NavbarContainer, NavLink, SearchBox, SearchBoxContainer, SearchButton } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ handleSearch, handleSearchChange }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Giphy Search</Logo>
      </LogoContainer>
      <NavbarContainer>
        <SearchBoxContainer>
          <SearchBox placeholder='Search for a gif' onChange={e => handleSearchChange(e.target.value)} />
          <SearchButton onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </SearchBoxContainer>
        <NavLink to="/my-saved-gifs">My Saved Gifs</NavLink>
      </NavbarContainer>
    </HeaderContainer>
  );
}

export default Header;
