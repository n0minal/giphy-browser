import GifCard from '../components/GifCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MySavedGifsPage = () => {
  return (
    <div>
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
      <h1>My Saved Gifs</h1>
      <GifCard/>
      <GifCard/>
      <GifCard/>
    </div>
  );
}

export default MySavedGifsPage;
