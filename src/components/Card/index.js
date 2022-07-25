import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, CardImage, CardInfo, CardInfoText, FavoriteButton } from "./styles";

const Card = ({ gif, isFavorite, toggleFavorite, handleUnfavorite }) => {
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
          {
            handleUnfavorite && (
              <FavoriteButton onClick={() => handleUnfavorite(gif)}>
                <FontAwesomeIcon icon={faTrash} />
              </FavoriteButton>
            )
          }
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
