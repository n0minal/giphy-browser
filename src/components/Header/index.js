import { Link } from "react-router-dom";
import "./styles.scss";

const Header = ({ handleSearch, handleSearchChange }) => {
  return (
    <div className="header">
      <div className="header-info">
        <h1 className="logo">Giphy Search</h1>
      </div>
      <div className="header-content">
        <div className="search-box">
          <input placeholder='Search for a gif' onChange={e => handleSearchChange(e.target.value)}/>
          <button onClick={handleSearch}>Search</button>
        </div>
        <Link to="/my-saved-gifs"className="nav-button">My Saved Gifs</Link>
      </div>
    </div>
  );
}

export default Header;
