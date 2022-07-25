import Card from '../../components/Card';
import useFavorites from '../../hooks/useFavorites';
import { ContentContainer } from './styles';
import NavLink from '../../components/NavLink';
import Header from '../../components/Header';

const MySavedGifsPage = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <Header>
        <NavLink to="/">Go Back</NavLink>
      </Header>
      <ContentContainer>
        {favorites.map(gif => (<Card gif={gif} key={gif.id}/>))}
      </ContentContainer>
    </>
  );
}

export default MySavedGifsPage;
