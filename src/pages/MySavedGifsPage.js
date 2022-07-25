import Card from '../components/Card';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';

const MySavedGifsPage = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="header">
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <h1>My Saved Gifs</h1>
      </div>
      <div className="body">
        {favorites.map(gif => (<Card gif={gif} key={gif.id}/>))}
      </div>
    </>
  );
}

export default MySavedGifsPage;
