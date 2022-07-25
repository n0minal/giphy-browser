import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = ({ gif, isFavorite, toggleFavorite }) => {
  return (
    <div className="card">
      <img src={gif.images.fixed_height.url} alt=""/>
      <div className="info">
        <span className="author">{gif.user?.display_name || 'Unknown Author'}</span>
        { toggleFavorite && (
          <button className="favorite-button" onClick={() => toggleFavorite(gif)}>
            <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'filled-heart' : 'empty-heart'} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
