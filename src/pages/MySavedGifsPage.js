import GiphyCard from '../components/GiphyCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MySavedGifsPage = () => {
  return (
    <div>
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
      <h1>My Saved Gifs</h1>
      <GiphyCard/>
      <GiphyCard/>
      <GiphyCard/>
    </div>
  );
}

export default MySavedGifsPage;
