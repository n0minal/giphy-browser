import Card from '../../components/Card';
import useFavorites from '../../hooks/useFavorites';
import { ContentContainer } from './styles';
import NavLink from '../../components/NavLink';
import Header from '../../components/Header';

const MySavedGifsPage = () => {
  const { favorites, setFavorites } = useFavorites();

  const handleUnfavorite = async (gif) => {
    setFavorites(state => state.filter(favorite => gif.id !== favorite.id));
  }

  return (
    <>
      <Header title="My Saved Gifs">
        <NavLink to="/">Go Back</NavLink>
      </Header>
      <ContentContainer>
        {favorites.map(gif => (<Card gif={gif} key={gif.id} handleUnfavorite={handleUnfavorite}/>))}
      </ContentContainer>
    </>
  );
}

export default MySavedGifsPage;
