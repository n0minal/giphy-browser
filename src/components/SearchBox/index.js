import { SearchInput, SearchBoxContainer, SearchButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ handleSearch, handleSearchChange }) => {
  return (
    <SearchBoxContainer>
      <SearchInput placeholder='Search for a gif' onChange={e => handleSearchChange(e.target.value)} />
      <SearchButton onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </SearchBoxContainer>
  )
}

export default SearchBox;
