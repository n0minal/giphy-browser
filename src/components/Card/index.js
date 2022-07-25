import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, CardImage, CardInfo, CardInfoText, FavoriteButton } from "./styles";

const Card = ({ gif, isFavorite, toggleFavorite }) => {
  return (
    <CardContainer>
      <CardImage src={gif.images.fixed_height.url} alt="" />
      <CardInfo>
        <CardInfoText>{gif.user?.display_name || 'Unknown Author'}</CardInfoText>
          { toggleFavorite && (
            <FavoriteButton onClick={() => toggleFavorite(gif)}>
              <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'filled' : 'empty'} />
            </FavoriteButton>
          )}
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
